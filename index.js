const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");

client.on('message', message =>{
    if (message.content == 'Hi' || message.content == 'hi') {
        message.reply('Hi, how are you?');
    }
});

client.on('message', message =>{
    if (message.content == 'oof' || message.content == 'gay') {
        message.reply('No U');
    }
});

client.on('message', message =>{
    if (message.content == 'Im gay' || message.content == 'gay' || message.content == 'coon' || message.content == 'Coon') {
        message.reply('No U');
    }
});

client.on('message', message =>{
    if (message.content == 'help' || message.content == 'khelp') {
        message.reply('Dm <@252571263061458947> for more information about kenbot');
    }
});

client.login(config.token)