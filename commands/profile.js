/**
 * ------------------------------------------------------------------
 * COMMAND: USER PROFILE (V2 DESIGN)
 * ------------------------------------------------------------------
 * @author      Carz
 * @github      https://github.com/carzdev
 * @description Affiche une carte de profil utilisant les Containers
 * et le nesting avancé de la V2.
 * ------------------------------------------------------------------
 */

import { SlashCommandBuilder, ButtonBuilder, ButtonStyle, MessageFlags } from 'discord.js';
import { V2 } from '../utils/ComponentFactory.js'; 

export default {
    data: new SlashCommandBuilder()
        .setName('profil')
        .setDescription('Affiche un profil utilisateur format V2 (Coded by Carz)'),

    async execute(interaction) {
        const user = interaction.user;
        const joinedDate = new Date().toLocaleDateString('fr-FR');
        
        // --- BOUTONS D'ACTION (LEGACY V1) ---
        const btnContact = new ButtonBuilder()
            .setCustomId('contact_user')
            .setLabel('Envoyer un MP')
            .setStyle(ButtonStyle.Primary)
            .setEmoji('📩');

        const btnKick = new ButtonBuilder()
            .setCustomId('mod_kick')
            .setLabel('Expulser')
            .setStyle(ButtonStyle.Danger)
            .setDisabled(true);

        // --- CONSTRUCTION DU LAYOUT V2 ---
        const layout = [
            // Header Rose
            V2.container({
                accentColor: 0xFF0055, 
                spacing: 1, 
                components: [
                    V2.text(`# Profil de ${user.username}`, 'heading'),
                    V2.text(`*Coded by Carz* | ID: \`${user.id}\``)
                ]
            }),

            // Séparateur
            V2.separator(2),

            // Corps (Stats)
            V2.container({
                accentColor: 0x2B2D31, 
                components: [
                    V2.text("**Statistiques du serveur**"),
                    V2.text(
                        "• Messages envoyés : 14,203\n" +
                        "• Heures en vocal : 420h\n" +
                        "• Karma : 9000+"
                    )
                ]
            }),

            // Séparateur fin
            V2.separator(0),

            // Footer (Boutons)
            {
                type: 1, // ActionRow classique
                components: [
                    btnContact.toJSON(),
                    btnKick.toJSON()
                ]
            }
        ];

        // --- ENVOI SECURISE ---
        try {
            // Flag obligatoire pour activer le parsing V2
            const flags = MessageFlags.IsComponentsV2;

            await interaction.reply({
                components: layout,
                flags: flags
            });

        } catch (err) {
            console.error(`[CarzDev Error] Payload V2 invalide :`, err);
            await interaction.reply({ 
                content: "Erreur critique. Contactez le dev (github.com/carzdev).", 
                ephemeral: true 
            });
        }
    }
};