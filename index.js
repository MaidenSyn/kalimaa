const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log('This bot is online');
})

bot.on('message', msg=>{
    if(msg.content === 'HELLO'){
        msg.reply('HELLO FRIEND!')
    }
})

client.login(process.env.BOT_TOKEN);
