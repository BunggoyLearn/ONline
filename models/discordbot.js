require('dotenv').config();
require('./register-commands');
const uuid = require('uuid');
const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
const relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime)

const sampleArray = [
    {
        id: '2ce7b2f7-49cc-4b28-9256-c7a1e0dabef2',
        title: 'This is the title',
        description: 'this is object 1',
        date: '2024-07-24',
        time: '12:00'
    },

    {
        "id": "df69e111-c22d-4a25-b521-a19473f35d07",
        "title": "Let's hang and chill allllll day",
        "description": "Vibin tbh lets party.",
        "date": 20250105,
        "time": 1800
    }

];

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');
//const id = uuid.v4();
const id = '2ce7b2f7-49cc-4b28-9256-c7a1e0dabef2'
const commands = ['/help', ' /event', ' /whenis'];
const eventArray = sampleArray;

//Discord bot needs all of these discord functionalities to run

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
    ],
});

//A console log that tells us the bot is online

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
});

//Interaction handler

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    //help command, if you type help it lists out the commands you can use with the bot
    if (interaction.commandName === 'help') {
        interaction.reply(`Here is a list of our commands: ${commands}`);
    }
    //event creation command allows you to create events in discord
    if (interaction.commandName === 'event') {
        const title = interaction.options.get('title');
        const description = interaction.options.get('description');
        const date = interaction.options.get('date');
        const time = interaction.options.get('time');
        //Makes sure that the user entered the date in the correct format or throws an error
        if (dayjs(`${date.value}`, 'YYYY-MM-DD', true).isValid()) {
            const event = new EmbedBuilder()
                .setTitle(title.value)
                .setDescription(`@everyone ${description.value} `)
                .setColor('Random')
                .addFields(
                    {
                        name: 'id',
                        description: 'This is the Unique ID',
                        value: id,
                    },
                    {
                        name: 'Date',
                        description: 'This is the date',
                        value: date.value,
                        inline: true,
                    },
                    {
                        name: 'Time',
                        description: 'This is the time',
                        value: time.value,
                        inline: true,
                    },
                );
            //Post the event
            interaction.reply({ embeds: [event] });
        } else {
            interaction.reply({ content: 'Something went wrong...', ephemeral: true });
        }
    }

    //Start of the when is command which grabs an event date and tells you how far in the future it is from now.
    if (interaction.commandName === 'whenis') {
        const eventid = interaction.options.get('id');
        const boolean = interaction.options.get('reveal');
        const result = eventArray.filter((element) => element.id === eventid.value);
        const eventObject = JSON.stringify(result, null, 2);
        const object = JSON.parse(eventObject)[0];

        //If the object is not null or undefined continue or else tell the user this id does not exist
        if (object) {
            const date = object.date
            futuredate = dayjs(date);
            const duration = dayjs().to(futuredate);
            //If the duration includes the phrase 'in' which only occurs in future tense send it through otherwise tell the user it has already passed
            if (duration.includes('in')) {
                if (boolean.value === true) {
                    interaction.reply({ content: `This event will take place ${duration}.` });
                } else {
                    interaction.reply({ content: `This event will take place ${duration}.`, ephemeral: true });
                }
            } else {
                interaction.reply({ content: `This date passed ${duration}`, ephemeral: true });
            }
        } else {
            interaction.reply({ content: 'This id does not exist', ephemeral: true });
        }
    }
})

//Logs in the bot to discord using unqiue token
client.login(process.env.TOKEN);
