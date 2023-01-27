const fs = require("fs");

module.exports = async bot => {

    fs.readdirSync("./Host").filter(f => f.endsWith(".js")).forEach(async file => {

        let event = require(`../Host/${file}`)
        bot.on(file.split(".js")[0], event.bind(null))
        console.log(`Fichier ./Host/${file} chargée avec succès !`)
    })
}