const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjY3NTc0OTA5ODQ5MDQyOTU1.XiKq_w.NASnn_lH5v3wb26jA8NI8tiOPyU'

bot.on('ready', () =>{
    console.log('This bot is online');
})

bot.on('message', msg=>{
    if(msg.content === 'HELLO'){
        msg.reply('HELLO FRIEND!')
    }
})

bot.login(token);