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
                description: 'Add the day of the event here',
                type: ApplicationCommandOptionType.String,
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
        console.log('Command registered')
    } catch (error) {
        console.log(`There was an error ${error}`);
    }
})();