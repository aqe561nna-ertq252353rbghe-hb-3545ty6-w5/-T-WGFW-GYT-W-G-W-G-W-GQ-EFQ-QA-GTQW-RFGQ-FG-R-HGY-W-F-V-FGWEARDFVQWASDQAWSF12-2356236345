const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', function() {
client.user.setGame('Maintenance | صيانة')
client.user.setStatus('away', 'Maintenance | صيانة') 
console.log(`i am ready ${client.user.username}`);
});


client.login(process.env.token)
