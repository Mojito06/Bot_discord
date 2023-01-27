const Discord = require("discord.js")

module.exports = {

    name: "embed",
    description: "Affiche un expemple d'embed",
    permission: "Aucune",
    dm: true,

    async run(bot, message){

        const the_embed = new Discord.EmbedBuilder()
            .setTitle('Embed example')
            .setColor('#2AFAB1')
            .setURL('https://google.com/')
            .setAuthor({ name: 'James Hetfield', iconURL: 'https://www.stringsbymail.com/images/PH112P94.jpg', url: 'https://i.imgur.com/zTIW5ai.jpeg' })
            .setDescription('description !!!')
            .setThumbnail('https://i.imgur.com/zTIW5ai.jpeg')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	        .setImage('https://i.imgur.com/AfFp7pu.png')
	        .setTimestamp()
	        .setFooter({ text: 'Some footer text here', iconURL: 'https://www.stringsbymail.com/images/PH112P94.jpg' });
        message.channel.send({
            embeds: [the_embed],
        });
    }
}