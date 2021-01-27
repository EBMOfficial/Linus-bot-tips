const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js')
var date = new Date().toLocaleString();
module.exports = (client) => {
client.on('message', async message => {
      
      const BoomerRole = message.guild.roles.cache.find(role => role.name === "Les boomers normaux")
      const RatRole = message.guild.roles.cache.find(role => role.name === "The normal Rat Haven dwellers")
      const BoomerHaven = client.guilds.cache.get("597676585058828300")
   
      const ApprovalEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Hi there new user!')
    .setDescription('Please use either one of the comamnds in order to get a role.')
    .addFields(
      { name: '\u200B', value: '\u200B'},
      { name: 'Essential server roles', value: 'The command "^giveBoomerRole" gives you the "Les boomers normaux" role, and the command "^giveRatRole" gives you the "The normal Rat Haven dwellers" role.'},
      { name: '\u200B', value: '\u200B'},
      {name: 'Essential server roles', value: 'To get access to both of these compartments, please consider using the command "^AccessToAll" to receive the "Access to all compartments" role.'},
      { name: '\u200b', value: '\u200b'},
      { name: "Have some patience. A moderator will be with you in a bit!", value: "After you have used the command '-agree', please use either one of the commands, depending on which compartment you want to enter. A moderator will approve you shortly."}
      )
      .setTimestamp()
      .setFooter('Time to pick a role!');
     
      
      const AgreeErrorEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(`Hello there ${message.author.username}!`)
      .setThumbnail('https://i.ytimg.com/vi/hAsZCTL__lo/maxresdefault.jpg')
      .setDescription("It seems that you have already been verified!")
      const YapRoleEmbed = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle(`Hi ${message.author.username}`)
       .setDescription("It seems that you already have the 'The Ironic Racists' role!")
       .setThumbnail("https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F032%2F558%2Ftemp6.jpg")
      const YapEmbed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle('Congratulations!')
  .setDescription("You're all set!")
  .setThumbnail('https://i.redd.it/db494tdiwv121.jpg')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'Disclaimer:', value: "You now have access to YapYap Inc.! Please wait for a moderator to approve you, and you can then enjoy in the server!"},
  )
    .setTimestamp()
    .setFooter('Enjoy pls 😃')
      
      
      const BoomerRoleEmbed = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle(`Hi ${message.author.username}`)
       .setDescription("It seems that you already have the Boomer Haven role!")
       .setThumbnail("https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F032%2F558%2Ftemp6.jpg")
        const BoomerEmbed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle('Congratulations!')
  .setDescription("You're all set!")
  .setThumbnail('https://i.redd.it/db494tdiwv121.jpg')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'Disclaimer:', value: "You now have access to the Boomer Haven compartment of the server. Please wait for a moderator to approve you, and you can then enjoy in the Boomer Rat Haven!"},
  )
    .setTimestamp()
    .setFooter('Enjoy pls 😃')
    const RatEmbed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle('Congratulations!')
  .setDescription("You're all set!")
  .setThumbnail('https://i.redd.it/db494tdiwv121.jpg')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'Disclaimer:', value: "You now have access to the Rat Haven compartment of the server. Please wait for a moderator to approve you, and you can then enjoy in the Boomer Rat Haven!"},
  )
    .setTimestamp()
    .setFooter('Enjoy pls 😃')
  const AccessToAllEmbed = new Discord.MessageEmbed()
   .setColor('GREEN')
  .setTitle('Great success!')
  .setDescription("Chenquieh! Please read the following.")
  .setThumbnail('https://www.indiewire.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-30-at-3.50.42-PM.png?w=780')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'I have added the "Access to all compartments" role to your profile', value: "You now have Access to all compartments of the server. Great success!"},
  )
    .setTimestamp()
    .setFooter('Very nice!');

  const AccessToAllRoleEmbed = new Discord.MessageEmbed()
   .setColor("RED")
   .setTitle(`Hi ${message.author.username}!`)
   .setDescription("It seems that you already have the Access to all compartments role!")
   .setThumbnail("https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F032%2F558%2Ftemp6.jpg")
   .setTimestamp()
   .setFooter("For everyone, by EBMOfficial and the magic of discord.js.")
      
       if (message.content === "-agree") {
         if (message.member.roles.cache.some(role => role.name === "Awaiting Verification")) {
         } else return message.channel.send(AgreeErrorEmbed)  
         if (message.guild === (BoomerHaven)) {
         message.channel.send(ApprovalEmbed)
         }
    
    const ModChannelOne = client.channels.cache.get("597686739318079489") 
    const ModChannelThree = message.guild.channels.cache.find(channel => channel.name === "agree-to-the-rules");
    
         const AgreeAlertEmbed = new Discord.MessageEmbed()
         .setTitle(`Alert! A new user is seeking approval!`)
         .setDescription(`${message.author.username} is currently seeking in approval in ${ModChannelThree}. Go approve them now!`)
         .setTimestamp()
         .setFooter("For administrators. Brought to you by EBMOfficial and the magic of discord.js.")
         if (message.guild === (BoomerHaven)) {
           ModChannelOne.send(AgreeAlertEmbed)
         }
         if (message.guild === (BoomerHaven)) {
         ModChannelOne.send("<@&597678223555559434> <@&597677756846702602> <@&759369721572622387>")
         }
    
	
    
         
         console.log(`${message.author.username} is currently seeking approval. The time as of this alert is ${date}.`)
         
        
         
         
        } 
        if (message.content === `${prefix}giveBoomerRole`) {
      if (message.member.roles.cache.some(role => role.name === "Les boomers normaux")) return message.channel.send(BoomerRoleEmbed).then(console.log(`${message.author.username} tried to get the Boomer role, but it turns out that he/she already has it! This event occurred at ${date}.`))
            else (message.member.roles.add(BoomerRole)).then(message.channel.send(BoomerEmbed))
            console.log(`${message.author.username} has been given the Boomer role by me on ${date}.`)

     } else if (message.content === `${prefix}giveRatRole`) {
       if (message.member.roles.cache.some(role => role.name === 'Awaiting Verification')) return message.channel.send(RatRoleEmbed).then(console.log(`${message.author.username} tried to get the Rat role, but it turns out that he/she already has it! Timestamp - ${date}.`))
       else message.member.roles.add(RatRole).then(message.channel.send(RatEmbed))
       console.log(`${message.author.username} has been given the Rat role by me. The time as of this message is ${date}.`)

     } else if (message.content === `${prefix}AccessToAll`) {
     var ATArole = message.member.guild.roles.cache.find(role => role.name === "Access to all compartments");
     if (message.member.roles.cache.some(role => role.name === "Access to all compartments")) return message.channel.send(AccessToAllRoleEmbed).then(console.log(`${message.author.username} tried to obtain the AccessToAll role, but it seems that they already have it! Timestamp - ${date}.`));
     else message.member.roles.add(ATArole);
     message.channel.send(AccessToAllEmbed).then(console.log(`Successfully gave ${ATArole} to ${message.author.username} on ${date}.`))
     
      } else if (message.content === `${prefix}giveYapRole`) {
        var YapRole = message.member.guild.roles.cache.find(role => role.name === "The Ironic Racists");
        if (message.member.roles.cache.some(role => role.name === "The Ironic Racists")) return message.channel.send(YapRoleEmbed).then(console.log(`${message.author.username} tried to get the YapRole but it turns out that they already have it! Timestamp - ${date}.`))
        else message.member.roles.add(YapRole)
        message.channel.send(YapEmbed).then(console.log(`Successfully gave YapRole to ${message.author.username} on ${date}.`))
      }
       
    
    });
}
