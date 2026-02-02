/**
 * ------------------------------------------------------------------
 * COMMAND: TECH NEWS (MAGAZINE LAYOUT)
 * ------------------------------------------------------------------
 * @author      Carz
 * @github      https://github.com/carzdev
 * @description Démonstration des capacités typographiques de la V2.
 * Utilise les nouveaux styles de texte (Heading, Caption) et 
 * les composants Media natifs.
 * ------------------------------------------------------------------
 */

import { SlashCommandBuilder, MessageFlags } from 'discord.js';
import { V2 } from '../utils/ComponentFactory.js'; 

export default {
    data: new SlashCommandBuilder()
        .setName('news')
        .setDescription('Affiche un article format Magazine (V2 Typography)'),

    async execute(interaction) {
        
        // Construction de la page article
        // Note : L'ordre dans le tableau 'components' dicte l'ordre d'affichage vertical.
        
        const articleLayout = [
            // 1. LE HEADER (HEADLINE)
            // On utilise un container avec une couleur forte pour attirer l'œil
            V2.container({
                accentColor: 0xFEE75C, // Jaune "Cyberpunk" / Breaking News
                spacing: 0, // Pas d'espace entre les textes du header
                components: [
                    V2.text("CYBERPUNK 2077: LA MAJ SECRÈTE", "heading"), // Gros titre gras
                    V2.text("Édition Spéciale • 02 Fév 2026 • Par CarzBot", "caption") // Petit texte gris
                ]
            }),

            // 2. L'IMAGE DE COUVERTURE (Composant Média)
            // En V2, l'image est un bloc à part entière, on peut la mettre où on veut.
            // Plus besoin de la coincer en bas de l'embed.
            V2.image("https://images.unsplash.com/photo-1550751827-4bd374c3f58b", "Cyber City Night"),

            // 3. LE CORPS DU TEXTE (Article Body)
            V2.container({
                accentColor: 0x2B2D31, // Fond sombre standard
                spacing: 1, // Aération du texte
                components: [
                    // Intro
                    V2.text(
                        "C'est confirmé. Le patch 3.0 apporte enfin les voitures volantes " +
                        "en multijoueur. Les développeurs ont utilisé une nouvelle tech de rendu " +
                        "basée sur le Ray Tracing hybride."
                    ),
                    
                    // Séparateur fin pour couper les sections
                    V2.separator(0), 

                    // Citation mise en valeur (Subheading)
                    V2.text(
                        "> \"Nous avons réécrit le moteur physique de zéro pour que les collisions soient réalistes.\"",
                        "subheading"
                    ),

                    V2.separator(0),

                    // Conclusion
                    V2.text(
                        "L'impact sur les performances est minime grâce au nouveau " +
                        "système de culling dynamique. Disponible dès ce soir sur les serveurs de test."
                    )
                ]
            }),

            // 4. SÉPARATEUR DE FIN (Large)
            V2.separator(2),

            // 5. FOOTER (Metadata)
            // On utilise un container transparent (pas d'accentColor) ou juste un texte
            V2.text("Source: Internal Dev Team • Vérifié par @Carz", "caption")
        ];

        // Envoi avec le Flag V2 OBLIGATOIRE
        try {
            await interaction.reply({
                components: articleLayout,
                flags: MessageFlags.IsComponentsV2
            });
        } catch (error) {
            console.error("Erreur News V2:", error);
            await interaction.reply({ content: "Erreur de rendu.", ephemeral: true });
        }
    }
};