const Discord = require("discord.js");
const decompress = require("decompress");
var http = require('http');
var fs = require('fs');


module.exports = {
	
	name: "updateevents",
	description: "Met à jour les events du bot",
	permission: "Aucune",
	dm: true,

	async run(bot,message) {

        var download = function(url, dest, cb) {
            var file = fs.createWriteStream(dest);
            http.get(url, function(response) {
                response.pipe(file);
                file.on('finish', function() {
                    file.close(cb);
                });
            });
        }

        //Téléchargement du fichier.zip à jour contenant les derniers events
        download('http://isis.unice.fr/~pl105229/ext/bot/update/events/upadte.zip','./update.zip',null);


        //Décompréssion du fichier update.zip
        decompress("update.zip",'./Events/')
            .then((files) => {
                console.log(files);
                message.reply(`Update réalisé avec succès !`);
            })
            .catch((error) => {
                console.log(error);
                message.reply(`Cela à échoué :/`);
            });
	}
}