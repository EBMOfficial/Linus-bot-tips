const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js')
var date = new Date().toLocaleString();
module.exports = (client) => {
   client.on('message', async message => {
const BumpRoleCreationErrorEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`Hi ${message.author.username}!`)
            .setDescription("It seems that the bumping ping role already exists in this server!")
            .setThumbnail("https://i.ytimg.com/vi/hAsZCTL__lo/maxresdefault.jpg")
            .setTimestamp()
            .setFooter("For everyone, by EBMOfficial and the magic of discord.js.")

    if (message.content === `${prefix}createBumpRole`) {
     
        if (message.member.hasPermission("ADMINISTRATOR")) {
        } else return message.channel.send("Your permissions are too low!")
    const BumpRoleCreationEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
      .setTitle(`Hi there ${message.author.username}!`)
     .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/e/e4/Linus_Sebastian_Screenshot_From_Youtube_August_5_2013.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'Do you want to create a role for bumping?', value: "Click on either the check mark or cross depending on your choice."},
    )
    
     const reactionMessage = await message.channel.send(BumpRoleCreationEmbed);
     reactionMessage.react("✅") | reactionMessage.react("❌")
    
    
    const filter = (reaction, user) => {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    }; 
    
    reactionMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();
    
		if (reaction.emoji.name === '✅') { 
            if (message.guild.roles.cache.find(role => role.name === "bumping ping")) return message.channel.send(BumpRoleCreationErrorEmbed).then(console.log(`${message.author.username} tried to create a bumping ping role, but it turns out that the role already exists in the guild! Timestamp - ${date}.`))
            else (message.guild.roles.create)({
                data: {
                  name: 'bumping ping',
                  color: 'BLUE',
                },
                reason: 'We needed a role for people who regularly bump the server.',
              })
              message.channel.send(`Hey ${message.author.username}, thank you for creating the bumping ping role. You can now assign it to people who regularly bump the server!`)
              console.log(`${message.author.username} has successfully created the bumping ping role on ${date}.`)
    
     
        } else if (reaction.emoji.name === '❌') {
          const BumpRoleCreationExitEmbed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle(`Hi ${message.author.username}!`)
          .setDescription("Thank you for your response. You have exited this program.")
          .setThumbnail("")
          .setTimestamp()
          .setFooter("For administrators, by EBMOfficial and the magic of discord.js.")
			message.channel.send(BumpRoleCreationExitEmbed)
      console.log(`${message.author.username} has exited the createBumpRole program. on ${date}.`)
		}
    
	})
    }
});


client.on('message', async message => {
  const BumpRoleErrorEmbed = new Discord.MessageEmbed()
    .setColor('RED')
      .setTitle(`Hello there ${message.author.username}!`)
      .setThumbnail('https://i.ytimg.com/vi/hAsZCTL__lo/maxresdefault.jpg')
      .setDescription("It seems that you already have the bumping ping role!")
  const BumpRoleEmbed = new Discord.MessageEmbed()
   .setTitle(`Success!`)
     .setThumbnail('https://cdn.discordapp.com/attachments/772088888561762314/777271020322160650/unknown.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: `Hi ${message.author.username}`, value: "I have successfully given you the 'bumping ping' role. You will now be notified every two hours to bump the server!"}
    )
 if (message.content === `${prefix}giveBumpRole`) {
   const BumpRole = message.guild.roles.cache.find(role => role.name === "bumping ping")
   if (message.member.roles.cache.some(role => role.name === "bumping ping")) {
    message.channel.send(BumpRoleErrorEmbed).then(console.log(`${message.author.username} already has the bumping ping role!`))
   } else message.member.roles.add(BumpRole).then(message.channel.send(BumpRoleEmbed)).then(console.log(`${message.author.username} has been given the bumping ping role by me on ${date}.`))
     
    
 }


});
  

}
