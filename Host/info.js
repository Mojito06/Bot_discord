const Discord = require("discord.js");
const http = require('http');
const fs = require('fs');

// Set the URL of the request to the ipify API
const options = {
    host: 'api.ipify.org',
    port: 80,
    path: '/?format=json'
};
  
// Create a new http.ClientRequest object
const req = http.request(options, (res) => {
// And set the response encoding to utf8
    res.setEncoding('utf8');
  
    // When a chunk of data is received, append it to the body
    let body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });
  
    // parse the JSON
    res.on('end', () => {
        let data = JSON.parse(body);
        const host_ip = data.ip;
        console.log(host_ip);
        var host = {
            ip : host_ip
        }

        module.exports = {host}
    });
});
  
// Send the request
req.end();

module.exports = async () => {

}
