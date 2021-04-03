const Discord = require('discord.js');
const express = require("express");
const app = express();
const bot = new Discord.Client();

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}, basic discord bot template -by MrWaw`);
});

bot.on('message', msg => {
  if (msg.content === '!help') {
    msg.channel.send('**Help Commands** \n `!boop` - Boop boop beep beep? \n `!hello` - The bot say hi for you! \n `!hey` - lol');
  }
    if (msg.content === '!hello') {
    msg.reply('hi!');
  }
  if (msg.content === '!boop') {
    msg.channel.send('**Beep!** 🤖');
  }
  if (msg.content === '!hey') {
  msg.channel.send('lol'); 
  }
  //make your own command if you want, no need to be like these commands lol.
});

require('./server')();
bot.login('DUDE USE YOUR BOT TOKEN');
