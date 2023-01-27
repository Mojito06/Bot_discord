const Discord = require("discord.js");
var os = require('os');

module.exports = async bot => {
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
            console.log("\t\t" + attr + 
                " : " + element[attr] );
            }
        });  
    }
    
    console.log("total number of Network "
    + "interfaces is " + no_of_network_interfaces);
    
}

