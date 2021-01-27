const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js')
var date = new Date().toLocaleString();
module.exports = (client) => {
client.on('message', async message => {
        if (message.content === `${prefix}help`) {
            const HelpEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle('Welcome to the help command portal. Please enter one of the mentioned commands to get informed on various commands offered by me.')
	        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
	        .setDescription("For help regarding verification, please react with '✅'. For help regarding basic commands, please react with '😀'. For help regarding Disboard bump reminders, please react with '🤛'. For help regarding music commands, please react with '🎶'. For help regarding interactive commands, please react with '🤝'. There are simpler ways of getting help as well. '^help verification', '^help basic', ^help bumps', '^help music' and '^help interactive' are what you need if you want to navigate to help the old-fashioned way.")
	        .setThumbnail('https://pbs.twimg.com/media/C75B7OUVsAAENXT.jpg')
	        .setTimestamp()
            .setFooter('Hopefully you learned something! 😁');
            const HelpWait = await message.channel.send(HelpEmbed)
            HelpWait.react("✅") | HelpWait.react("😀") | HelpWait.react("🤛") | HelpWait.react("🎶") | HelpWait.react("🤝")
            const filter = (reaction, user) => {
              return ['✅', '😀', '🤛', '🎶', '🤝'].includes(reaction.emoji.name) && user.id === message.author.id;
          }; 
            HelpWait.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	         .then(collected => {
		       const reaction = collected.first();

		       if (reaction.emoji.name === "✅") {
            const VerificationHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}. here is everything you need to know about verification.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("For starters, the command '^verify check' enables moderators to distinguish unverified members from verified ones. This command can also be used by new users to distinguish themselves as verified. There are two ways to use this command. One way is the user using it for themselves and the other way is for moderators. Moderators can mention users while using the command (such as 'verify check (insert user here)').") 
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit(VerificationHelpEmbed)
            HelpWait.reactions.removeAll()
		       } else if (reaction.emoji.name === "😀") {
            const BasicHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}, here is everything you need to know about basic commands.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("For starters, the command '^avatar' will deliver either your avatar or the mentioned user's avatar, depending on how it is used. The command '^emoji' will show you all of the emojis in your server. For now, this command only works in servers with 50 emojis or below. The command '^purge' is available for administrators only. You can delete upto 100 messages in your desired channel. The command '^shiba' will get an image of a Shiba Inu dog from subreddit 'r/shiba'. The command '^meme' will get a meme from reputed meme subreddits. The command '^cute' will get an image of a cute animal from various subreddits. The command '^whathappenedtoEric?' will show you what really happened to Eric. The command '^kidney failure' will get an image of your favorite brick from subreddit 'r/Jixaw'. The command '^coinflip' can be used in events of bets or for just about everything, and finally, the command '^vibecheck' will give you your vibe percentage.")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit(BasicHelpEmbed)
            HelpWait.reactions.removeAll()
           } else if (reaction.emoji.name === "🤛") {
            const BumpHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}, here is everything you need to know about Disboard bump reminders.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("This is pretty simple. To get started, use the command '^setBumpChannel' to set your desired channel as the channel where you would bump the server. This is to ensure that the bot does not send the bump reminders to other channels, causing a major disturbance. Then, use the command '^createBumpRole' to create the bumping ping role which the bot will ping every two hours. Then, use the command '^giveBumpRole' to be given the bumping ping role. If you are an administrator, you can assign this role to members as well. Then, after the role has been created, simply use the command '^setReminder' to start the 2 hour reminder. After the bot pings the role, simply use the command '!d bump' to keep the reminder steady. ")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit(BumpHelpEmbed)
            HelpWait.reactions.removeAll()
           } else if (reaction.emoji.name === "🎶") {
            const MusicHelpEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${message.author.username}, here is everything you need to know about my music functionality.`)
            .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
            .setDescription("My music functionality only works with URLs. Use the command '^play (insert url here)' and the audio will play. The command '^skip' will skip the audio that is playing at the time this command is used. At last, the command '^stop' will halt the audio, and will cause the bot to leave the voice channel.")
            .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
            HelpWait.edit(MusicHelpEmbed)
            HelpWait.reactions.removeAll()
           } else if (reaction.emoji.name === "🤝") {
             const InteractiveHelpEmbed = new Discord.MessageEmbed()
             .setColor("RANDOM")
             .setTitle(`${message.author.username}, here is everything you need to know about interactive commands.`)
             .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
             .setDescription("For activation of the points channel, use the command '^setLeaderboardChannel' to set up your very own points channel in the desired channel. Please take into notice that this is an administrator-only command. After this command has been executed, you can start posting things in the points channel! To check on how many points people have in your server, use the command '^leaderboard'. Finally, if you want to change the points channel, simply go to your new desired channel and use the command '^setLeaderboardChannel' there. For activation of the welcome channel, simply go to your system channel and use the command '^setWelcomeChannel' there. You will then have a welcome/goodbye channel to greet new members and to say goodbye to outgoing ones!")
             HelpWait.edit(InteractiveHelpEmbed)
             HelpWait.reactions.removeAll()
            }
			     
           })
          

          }

    }); 
    client.on('message', async message => {
      if (message.content === `${prefix}help verification`) {
        const VerificationHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}. here is everything you need to know about verification.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("For starters, the command '^verify check' enables moderators to distinguish unverified members from verified ones. This command can also be used by new users to distinguish themselves as verified. There are two ways to use this command. One way is the user using it for themselves and the other way is for moderators. Moderators can mention users while using the command (such as 'verify check (insert user here)').") 
        .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
        message.channel.send(VerificationHelpEmbed)
      } else if (message.content === `${prefix}help basic`) {
        const BasicHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about basic commands.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("For starters, the command '^avatar' will deliver either your avatar or the mentioned user's avatar, depending on how it is used. The command '^emoji' will show you all of the emojis in your server. For now, this command only works in servers with 50 emojis or below. The command '^purge' is available for administrators only. You can delete upto 100 messages in your desired channel. The command '^shiba' will get an image of a Shiba Inu dog from subreddit 'r/shiba'. The command '^meme' will get a meme from reputed meme subreddits. The command '^cute' will get an image of a cute animal from various subreddits. The command '^whathappenedtoEric?' will show you what really happened to Eric. The command '^kidney failure' will get an image of your favorite brick from subreddit 'r/Jixaw'. The command '^coinflip' can be used in events of bets or for just about everything, and finally, the command '^vibecheck' will give you your vibe percentage.")
        .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
        message.channel.send(BasicHelpEmbed)

      } else if (message.content === `${prefix}help bumps`) {
        const BumpHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about Disboard bump reminders.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("This is pretty simple. To get started, use the command '^setBumpChannel to set your desired channel as the channel where you would bump the server. This is to ensure that the bot does not send the bump reminders to other channels, causing a major disturbance. Then, use the command '^createBumpRole' to create the bumping ping role which the bot will ping every two hours. Then, use the command '^giveBumpRole' to be given the bumping ping role. If you are an administrator, you can assign this role to members as well. Then, after the role has been created, simply use the command '^setReminder' to start the 2 hour reminder. After the bot pings the role, simply use the command '!d bump' to keep the reminder steady. ")
        .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
        message.channel.send(BumpHelpEmbed)

      } else if (message.content === `${prefix}help music`) {
        const MusicHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about my music functionality.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("My music functionality only works with URLs. Use the command '^play (insert url here)' and the audio will play. The command '^skip' will skip the audio that is playing at the time this command is used. At last, the command '^stop' will halt the audio, and will cause the bot to leave the voice channel.")
        .setFooter("Hopefully, I was helpful! For everyone, by EBMOfficial and the magic of discord.js.")
        message.channel.send(MusicHelpEmbed)
      
      } else if (message.content === `${prefix}help interactive`) {
        const InteractiveHelpEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username}, here is everything you need to know about interactive commands.`)
        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`)
        .setDescription("For activation of the points channel, use the command '^setLeaderboardChannel' to set up your very own points channel in the desired channel. Please take into notice that this is an administrator-only command. After this command has been executed, you can start posting things in the points channel! To check on how many points people have in your server, use the command '^leaderboard'. Finally, if you want to change the points channel, simply go to your new desired channel and use the command '^setLeaderboardChannel' there. For activation of the welcome channel, simply go to your system channel and use the command '^setWelcomeChannel' there. You will then have a welcome/goodbye channel to greet new members and to say goodbye to outgoing ones!")
        message.channel.send(InteractiveHelpEmbed)
       }
    });




}
