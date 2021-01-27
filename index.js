const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('ok smelly'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// ================= START BOT CODE ===================
const Discord = require('discord.js')
const {
  prefix,
  token,
} = require('./config.json')
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION'] });
const config = require('./config.json')
client.login(token);
client.setMaxListeners(10000000);
var date = new Date().toLocaleString();
const welcome = require('./welcome.js')
const purge = require('./purge.js')
const agree = require('./agree.js')
const help = require('./help.js')
const vibecoin = require('./VBCF.js')
const leaderboardOne = require('./leaderboardOne.js')
const emoji = require('./emoji.js')
const avatar = require('./avatar.js')
const verifycheck = require('./verifycheck.js')
const bumprole = require('./bumprole.js')
const redditpull = require('./redditpull.js')
const channelrole = require('./VCRole.js')
const music = require('./music.js')
const setReminder = require('./setReminder.js')
const settingLeaderboard = require('./settingLeaderboard.js')
const ban = require('./ban.js')
const kick = require('./kick.js')
const settingWelcome = require('./settingWelcome.js')
const settingBumps = require('./settingBumps.js')



client.on('ready', () => {

    console.log("Connected as " + client.user.tag)
   const memberCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
  
  
  client.user.setActivity(`Kidney failure unfold | Serving ${client.guilds.cache.size} servers and ${memberCount} members | ^help`, { type: "WATCHING" }) 
    

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(`${channel.name} ${channel.type} ${channel.id}`)
        })

    });
    welcome(client)
    purge(client)
    agree(client)
    help(client)
    vibecoin(client)
    leaderboardOne(client)
    emoji(client)
    avatar(client)
    verifycheck(client)
    bumprole(client)
    redditpull(client)
    channelrole(client)
    music(client)
    setReminder(client)
    settingLeaderboard(client)
    ban(client)
    kick(client)
    settingWelcome(client)
    settingBumps(client)

    
    
});
