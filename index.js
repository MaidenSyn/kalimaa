const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY3NTc0OTA5ODQ5MDQyOTU1.XiOmSQ.xBxFk1aM9Wq3W5Rdhrigpor_e2E'

bot.on('ready', () =>{
    console.log('This bot is online');
})

bot.on('message', msg=>{
    if(msg.content === 'HELLO'){
        msg.reply('HELLO FRIEND!')
    }
})

bot.login(token);