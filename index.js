/**
 * ------------------------------------------------------------------
 * DISCORD BOT KERNEL - V2 READY
 * ------------------------------------------------------------------
 * @author      Carz
 * @github      https://github.com/carzdev
 * @license     Open Source
 * * @description Main entry point. Handles dynamic command loading
 * and InteractionCreate events with V2 support.
 * ------------------------------------------------------------------
 */

import { Client, GatewayIntentBits, Collection, Events } from 'discord.js';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

// Configuration Client (Intents minimaux pour la démo)
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.commands = new Collection();

// --- CHARGEMENT DYNAMIQUE DES COMMANDES ---
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const foldersPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(foldersPath).filter(file => file.endsWith('.js'));

console.log('>>> [CarzDev System] Initialisation du bot...');

for (const file of commandFiles) {
    const filePath = path.join(foldersPath, file);
    const command = await import(`file://${filePath}`);
    
    if ('data' in command.default && 'execute' in command.default) {
        client.commands.set(command.default.data.name, command.default);
        console.log(`[LOAD] Commande chargée : /${command.default.data.name}`);
    }
}

// --- EVENTS ---

client.once(Events.ClientReady, c => {
    console.log(`\n------------------------------------------------`);
    console.log(` BOT CONNECTÉ : ${c.user.tag}`);
    console.log(` SYSTEME      : Components V2 Ready`);
    console.log(` DEV          : https://github.com/carzdev`);
    console.log(`------------------------------------------------\n`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(`[EXEC ERROR] ${interaction.commandName}:`, error);
        
        const payload = { 
            content: 'Erreur système interne (Report @ github.com/carzdev)', 
            ephemeral: true 
        };
        
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp(payload);
        } else {
            await interaction.reply(payload);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);