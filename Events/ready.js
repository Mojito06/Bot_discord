const Discord = require("discord.js");
const loadSlashCommands = require("../Loaders/loadSlashCommands");
const { host } = require("../Host/info.js");
const os = require("os");
const fs = require("fs");

module.exports = async bot => {

    await loadSlashCommands(bot);
    console.log(`${bot.user.tag} est en ligne !`);

    console.log("whatsUp ?");
    const id_channel = "1068573408075460759";
    var net_int = os.networkInterfaces();
  
    var no_of_network_interfaces = 0;
    
    for (var key in net_int) {
        console.log(key);
        var net_infos=net_int[key];
            
        net_infos.forEach(element => {      
        no_of_network_interfaces++;
        console.log("\tinterface:");
        
            for (var attr in element){
                console.log("\t\t" + attr + " : " + element[attr] );
            }
        });  
    }
    
    console.log("total number of Network "
    + "interfaces is " + no_of_network_interfaces);

    let data = JSON.stringify(os.networkInterfaces());
    fs.writeFileSync('network-interfaces.json', data);

    fs.readFile('network-interfaces.json', (err, data) => {

        const _msgs = JSON.stringify(JSON.parse(data), null, 2);
        bot.channels.fetch(id_channel)
        .then(channel => {
            const the_embed = new Discord.EmbedBuilder()
            .setTitle('New Connection !!!')
            .setColor('#2AFAB1')
            .setAuthor({ name: "IP address" })
            .setDescription("Hey I'm on line dude !!!!")
	        .setTimestamp()
            channel.send({
            embeds: [the_embed],
            });
            channel.send('```json\n' + _msgs + '\n```');
        })
    });
    
}