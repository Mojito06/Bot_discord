const Discord = require("discord.js");

module.exports = {

    name: "mention",
    description: "Affiche la mention de l'utilisateur et du salon",
    permission: "Aucune",
    dm: true,

    async run(bot, message){

        const user = message.user.id;
        await message.reply(`Mention d'un utilisateur : <@${user}> \n Mention d'un salon : <#${message.channel.id}>`)
    }
}