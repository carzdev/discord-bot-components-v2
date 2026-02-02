/**
 * ------------------------------------------------------------------
 * COMMAND: TECH NEWS (MAGAZINE LAYOUT)
 * ------------------------------------------------------------------
 * @description Démonstration des capacités typographiques de la V2.
 * ------------------------------------------------------------------
 */
import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { V2 } from '../utils/ComponentFactory.js'; 

export default {
    data: new SlashCommandBuilder()
        .setName('news')
        .setDescription('Affiche un article format Magazine (V2 Typography)'),

    async execute(interaction) {
        
        const articleLayout = [
            // 1. LE TITRE (HEADLINE)
            V2.container({
                accentColor: 0xFEE75C, // Jaune "Breaking News"
                spacing: 1,
                components: [
                    V2.text("CYBERPUNK 2077: LA MAJ SECRÈTE", "heading"),
                    V2.text("Édition Spéciale • 02 Fév 2026", "caption")
                ]
            }),

            // 2. L'IMAGE DE COUVERTURE (Composant Média)
            V2.image("https://images.unsplash.com/photo-1550751827-4bd374c3f58b", "Cyber City"),

            // 3. LE CORPS DU TEXTE (Paragraphs)
            V2.container({
                components: [
                    V2.text(
                        "C'est confirmé. Le patch 3.0 apporte enfin les voitures volantes " +
                        "en multijoueur. Les développeurs ont utilisé une nouvelle tech de rendu..."
                    ),
                    V2.separator(0), // Petit saut
                    V2.text(
                        "> 'Nous avons réécrit le moteur physique de zéro.' - Lead Dev",
                        "subheading" // Style citation si dispo, sinon subheading
                    ),
                    V2.separator(0),
                    V2.text(
                        "L'impact sur les performances est minime grâce au nouveau " +
                        "système de culling dynamique."
                    )
                ]
            }),

            V2.separator(2), // Grand séparateur final

            // 4. FOOTER (Crédits)
            V2.text("Rédigé par l'IA News Bot • Source: Interne", "caption")
        ];

        await interaction.reply({
            components: articleLayout,
            flags: MessageFlags.IsComponentsV2
        });
    }
};