/**
 * ------------------------------------------------------------------
 * COMMAND: ITEM SHOP (NESTED LAYOUTS)
 * ------------------------------------------------------------------
 * @description Démo du "Nesting" (Container dans Container) pour
 * créer des cartes produits complexes.
 * ------------------------------------------------------------------
 */
import { SlashCommandBuilder, ButtonBuilder, ButtonStyle, MessageFlags } from 'discord.js';
import { V2 } from '../utils/ComponentFactory.js'; 

export default {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('Affiche un item légendaire (Advanced Nesting V2)'),

    async execute(interaction) {
        
        // Bouton d'achat classique (V1)
        const btnBuy = new ButtonBuilder()
            .setCustomId('buy_item')
            .setLabel('Acheter (500 crédits)')
            .setStyle(ButtonStyle.Success);

        // --- ARCHITECTURE AVANCÉE ---
        const productCard = [
            
            // CONTAINER PRINCIPAL (La carte)
            V2.container({
                accentColor: 0x5865F2, // Bordure bleue
                components: [
                    
                    // HEADER DU PRODUIT
                    V2.container({
                        accentColor: 0x000000, // Fond noir pour le titre
                        components: [
                            V2.text("⚔️ ÉPÉE DU NÉANT [Légendaire]", "heading")
                        ]
                    }),

                    // ZONE DE CONTENU HYBRIDE (Texte + Image mixés)
                    // Ici on démontre qu'on peut alterner les types sans embed
                    V2.container({
                        spacing: 1,
                        components: [
                            V2.image("https://images.unsplash.com/photo-1589987607627-616cac5c2c5a"), // Visuel produit
                            
                            V2.separator(1), // Ligne de séparation
                            
                            // DÉTAILS TECHNIQUES (Attributs)
                            V2.text("**Statistiques :**", "subheading"),
                            V2.text("• Dégâts : 9000\n• Vitesse : Rapide\n• Élément : Ombre"),
                            
                            V2.separator(0),
                            
                            V2.text("⚠️ *Nécessite le niveau 50*", "caption")
                        ]
                    })
                ]
            }),

            // ACTION ROW (Externe au container pour être cliquable facilement)
            {
                type: 1, 
                components: [ btnBuy.toJSON() ]
            }
        ];

        await interaction.reply({
            components: productCard,
            flags: MessageFlags.IsComponentsV2
        });
    }
};