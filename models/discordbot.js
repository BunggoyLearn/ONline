require('dotenv').config();
require('./register-commands');

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'help') {
        interaction.reply(`Here is a list of our commands: ${commands}`);
    }

    if (interaction.commandName === 'event') {
        const title = interaction.options.get('title');
        const description = interaction.options.get('description')
        const event = new EmbedBuilder()
            .setTitle(title)
            .setDescription(`@everyone ${description} `)
            .setColor('Random')
            .addFields({
                name: 'Field title',
                value: 'Some random value',
                inline: true,
            });

        interaction.reply({ embeds: [event] });
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'event') {
        const event = new EmbedBuilder()
            .setTitle('Event title')
            .setDescription('Event Description')
            .setColor('Random')
            .addFields({
                name: 'Field title',
                value: 'Some random value',
                inline: true,
            });

        message.reply({ embeds: [event] });
    }
});
const commands = ['/help', ' /create', ' /joke'];

client.login(process.env.TOKEN);
