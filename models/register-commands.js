require('dotenv').config();

const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'help',
        description: 'Gives list of commands',
    },
    {
        name: 'event',
        description: 'Creates events',
        options: [
            {
                name: 'title',
                description: 'The title of the event',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'description',
                description: 'Insert information about the event here',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'date',
                description: 'Add the date of the event here (Format: YYYY-MM-DD)',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'time',
                description: 'Add the time the event will start at (Format: 24:00)',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ]
    },
    {
        name: 'whenis',
        description: 'Gives list of commands',
        options: [
            {
                name: 'id',
                description: 'Insert the id of the event',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'reveal',
                description: 'Shows the output to the entire server',
                type: ApplicationCommandOptionType.Boolean,
                required: true,
            },
        ]
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )
        console.log('Commands registered')
    } catch (error) {
        console.log(`There was an error ${error}`);
    }
})();