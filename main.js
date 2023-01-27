
const Discord = require("discord.js");
const { token } = require("./config.json");

const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents});
const loadCommands = require("./Loaders/loadCommands");
const loadEvents = require("./Loaders/loadEvents");
const loadSlashCommands = require("./Loaders/loadSlashCommands")
const prefix = "!";

bot.commands = new Discord.Collection();

bot.login(token);

loadCommands(bot);
loadEvents(bot);