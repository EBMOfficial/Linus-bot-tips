const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js')
var date = new Date().toLocaleString();
const Bumped = require('./bump.js');
const { getChannelId } = require('./settingBumps.js')
module.exports = (client) => {

 client.on('message', async message => { 
  if (message.content === (`${prefix}setReminder`)) {
    // Destructure the guild property from the member object
    const { guild } = message
    // Access the channel ID for this guild from the cache
    const channelId = getChannelId(guild.id)
    const BumpRole = message.guild.roles.cache.find(role => role.name === "bumping ping")
      const bumpData = await Bumped.findById(message.guild.id)
      if (!bumpData) await Bumped.findByIdAndUpdate(message.guild.id, { $set: { LastBumped: Date.now() } }, { upsert: true })
      else if (Date.now() - bumpData.LastBumped < 7200000) return;
      await Bumped.findByIdAndUpdate(message.guild.id, { $set: { LastBumped: Date.now() } }, { upsert: true })
      if (message.channel.id === channelId) {
      setTimeout(() => {
      message.channel.send(`${BumpRole} chop-chop! It's time to bump! 😃`)
      console.log(`Succesfully reminded members with bumping ping role to bump. The time at this event was ${date}.`)
      }, 7200000);
      message.channel.bulkDelete(1)
      const ReminderConfirmationEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Interval has been set!`)
     .setThumbnail('https://cdn.discordapp.com/attachments/772088888561762314/777271020322160650/unknown.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: `Hi ${message.author.username}`, value: "Please check back every two hours to bump the server."}
    )
        message.channel.send(ReminderConfirmationEmbed).then(console.log(`${message.author.username} has set the 2 hour Disboard bump reminder on ${date}.`))
    }
  }
 })
 client.on('message', async message => {
   // Destructure the guild property from the member object
   const { guild } = message
   // Access the channel ID for this guild from the cache
   const channelId = getChannelId(guild.id)
  if (message.channel.id === channelId) {
   const BumpRole = message.guild.roles.cache.find(role => role.name === "bumping ping")
   if (message.content === `!d bump`) {
     const bumpData = await Bumped.findById(message.guild.id)
     if (!bumpData) await Bumped.findByIdAndUpdate(message.guild.id, { $set: { LastBumped: Date.now() } }, { upsert: true })
     else if (Date.now() - bumpData.LastBumped < 7200000) return;
     await Bumped.findByIdAndUpdate(message.guild.id, { $set: { LastBumped: Date.now() } }, { upsert: true })
      const BumpConfirmationEmbed = new Discord.MessageEmbed()
      .setTitle(`Bump confirmed!`)
     .setThumbnail('https://cdn.discordapp.com/attachments/772088888561762314/777271020322160650/unknown.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: `Hi ${message.author.username}`, value: "Thank you for bumping the server! I will remind you in two hours' time to bump it again."}
    )
    setTimeout(() => message.channel.send(`${BumpRole} chop-chop! It's time to bump! 😃`), 7200000);
      message.channel.send(BumpConfirmationEmbed).then(console.log(`${message.author.username} has bumped the server on ${date}. The timer will now reinitiate.`))
    }
  }
 

 })
}
