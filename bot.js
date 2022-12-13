const { REST, Routes } = require('discord.js');
require('dotenv').config()

// Load Token and Client ID From .env file
const TOKEN = process.env.TOKEN
const CLIENT_ID = process.env.CLIENT_ID

// List of Bots Commands
const commands = [
  {
    name: 'ping',
    description: 'Pings the Bot',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: 131071,
    /*[GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent]*/
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const Guilds = client.guilds.cache.map(guild => guild);
  for (const guild in Guilds) {
    if (Object.hasOwnProperty.call(Guilds, guild)) {
        console.log(Guilds[guild].name);
    }
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    const now = new Date(Date.now())
    const Tmsg = new Date(interaction.createdTimestamp)
    msgComp = 
    `
Ping Command Sent: ${Tmsg}
Ping Command Received: ${now}
Bot Latency ${now - Tmsg}
    `;
    await interaction.reply(msgComp);
  }
});


/*
client.on('messageCreate', msg => {
    console.log("\n\n\nNEW MESSAGE:\n");
    console.log(msg);
})*/

client.login(TOKEN);