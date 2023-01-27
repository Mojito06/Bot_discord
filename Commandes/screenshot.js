const Discord = require("discord.js");
const Screenshot = require('desktop-screenshot');
const fs = require('fs');

module.exports = {
	
	name: "screenshot",
	description: "Affiche le screenshot de la machine qui tourne",
	permission: "Aucune",
	dm: true,

	async run(bot,message) {

    Screenshot("screenshot.png", function(error, complete) {
        if(error)
            console.log("Screenshot failed", error);
        else
            console.log("Screenshot succeeded");
    });
        await message.reply(`Screenshot de :  ${require("os").userInfo().username}`);
        await message.channel.send({files: ["./screenshot.png"]});
        fs.unlink("./screenshot.png", (err) => {
            if (err) {
                throw err;
            }

            console.log("Delete File successfully.");
        });
	}
}


