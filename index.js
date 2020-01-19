const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY3NTc0OTA5ODQ5MDQyOTU1.XiP53w.aCgRHTRLKjvW5m4prDKEyDWPfqY'

bot.on('ready', () =>{
    console.log('This bot is online');
})

bot.on('message', msg=>{
    if(msg.content === 'HELLO'){
        msg.reply('HELLO FRIEND!')
    }
})

bot.login(token);