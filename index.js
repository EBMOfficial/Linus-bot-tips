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
    shrek,
    james,
    pottysimulator2077,
    idkcatfailure,

} = require('./config.json')
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION'] });
const config = require("./config.json")
client.login(token);
client.setMaxListeners(10000000);
var date = new Date().toLocaleString();
const Mongo = require('mongoose')
const LeaderboardSequence = require('./leaderboard.js')
const mongoose = require('mongoose')

mongoose.connect('hahanotforyou', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
});








client.on('ready', () => {

    console.log("Connected as " + client.user.tag)

    
    
    client.user.setActivity("Kidney failure unfold | ^help", { type: "WATCHING" })
    
    

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(`${channel.name} ${channel.type} ${channel.id}`)
        })

    });

  
  client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.partial) await reaction.fetch()
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.message.channel.id !== "780466909047947284") return;
    if (user.id === client.user.id) return;
    if (reaction.message.author.id === user.id) return reaction.users.remove(user)
    if (reaction.emoji.name === "🔼") {
      await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
      
    } else if (reaction.emoji.name === "🔽") {
      await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true})

    }


  });
  client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.partial) await reaction.fetch()
    if (reaction.message.partial) await reaction.message.fetch()
    if (reaction.message.channel.id !== "780466909047947284") return;
    if (reaction.message.author.id === user.id) return reaction.users.remove(user)
    if (user.id === client.user.id) return;
    if (reaction.emoji.name === "🔼") {
      await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: -1 } }, { upsert: true , new: true , setDefaultsOnInsert: true })
      } else if (reaction.emoji.name === "🔽") {
      await LeaderboardSequence.findOneAndUpdate({ userid: reaction.message.author.id, guildID: reaction.message.guild.id }, { $inc: { points: 1 } }, { upsert: true , new: true , setDefaultsOnInsert: true})

    }


  });
  client.on('message', async Redditmessage => {
    if (Redditmessage.channel.id === "780466909047947284") {
      if (Redditmessage.author.bot) return;
      await Redditmessage.react("🔼") 
      await Redditmessage.react("🔽")
    }


  });

  client.on('message', async message => {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    
    let EmojiEmbed = new Discord.MessageEmbed()
      .setTitle(`Here are the smelly emojis from the crap guild ${message.guild}`)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**Over all emojis [${OverallEmojis}]**`
      )
      .setColor(`RANDOM`);
   if (message.content === `${prefix}getEmojis`) {
    message.channel.send(EmojiEmbed)
   }

  });

  client.on("guildMemberAdd", (member) => {
   const WelcomeChannel = member.guild.systemChannel
   
   const WelcomeMessage = `Hey <@${member.id}>, Welcome to ${member.guild}! On behalf of the members of this server, I wish you a warm welcome!`
   WelcomeChannel.send(WelcomeMessage)
});

  client.on('message', async message => {
    if (message.content === `${prefix}leaderboard`) {
      const Users = await LeaderboardSequence.find({guildID: message.guild.id}).sort({ points: -1 })
     
      const embedArray = []
      for (var i = 0; i < Users.length % 10 + 1; i++) {
      const leaderboard = new Discord.MessageEmbed()
      .setTitle(`Here is ${message.guild}'s points leaderboard!`) 
      .setColor("RANDOM")
      .setThumbnail("https://pbs.twimg.com/media/D7ShRPYXoAA-XXB.jpg")
      
      let text = ""
      for (var j = 0; j < 10; j++) {
    if (!Users[ i * 10 + j ]) break;
    text += `${i * 10 + j + 1}. <@${Users[ i * 10 + j ].userid}>: ${Users[ i * 10 + j ].points}\n`
  }
      leaderboard.setDescription(text)
      .setFooter("By EBMOfficial and canta, for everyone with the magic of discord.js.")
      .setTimestamp()
      embedArray.push(leaderboard)
      }
      paginate(message, embedArray)
      
    }

  });

  


  client.on('message', async message => {
    if (message.content === `${prefix}depressedcat`) {
      message.channel.send(idkcatfailure)
      
    }

  });
  
   
    client.on('message', async message => {
        
        if (message.content === `${prefix}purge`) {
          if (message.member.hasPermission("ADMINISTRATOR")) {

          } else return message.channel.send("Your permissions are too low to execute this command!")
            message.channel.bulkDelete(100)
                    .then(messages => console.log(`${message.author.username} has bulk deleted 100 messages`))
                    
            message.channel.send(`Successfully deleted 100 messages.`)
            setTimeout(() => message.channel.bulkDelete(1), 10000)
            console.log(`Successfully deleted purge confirmation message at ${date}`)
                    
               
        }
            
    });

    
    client.on('message', async message => {
        if (message.content === `${prefix}help`) {
            const HelpEmbed = new Discord.MessageEmbed()
	        .setColor('RANDOM')
	        .setTitle('Did you ask for help?')
	        .setURL('https://www.youtube.com/channel/UCzYKkoDPi123pud9cD52kVQ?view_as=subscriber')
	        .setAuthor(`${message.author.username}`, `${message.member.user.avatarURL()}`, 'https://discord.js.org')
	        .setDescription('Well, here you are!')
	        .setThumbnail('https://pbs.twimg.com/media/C75B7OUVsAAENXT.jpg')
	        .addFields(
		        { name: '\u200B', value: '\u200B' },
            { name: '1. Self-Verification', value: 'Using the command "^verify check" will add a little checkmark next to your name, indicating that you have been verified.'},
            { name: '\u200B', value: '\u200B' },
            { name: "2. Working with Auttaja", value: "During the verification process, users are required to choose from either two roles. One role will give you access to the Boomer Haven compartment of the server and the other role will give you access to the Rat Haven compartment. Please type in '-agree' for more info."},
            { name: '\u200B', value: '\u200B' },
            { name: "3. Having Access to all compartments", value: "Using the command '^AccessToAll' will give you the 'Access to all compartments' role."},
            { name: '\u200B', value: '\u200B' },
            { name: "4. Wholesome and funny commands", value: "Using the command '^meme' will relay a meme from your beloved subreddits in the form of an embed. Using the command '^cute' will relay an image of a very cute animal through an embed. At last, using the command '^shiba' will relay an image of one of the cutest dogs ever, the Shiba Inu, through an embed."},
            { name: '\u200B', value: '\u200B' },
            { name: "5. Reminders for Disboard Bumping, and an admin-exclusive role creating command which enables the bot to create a bumping ping role, so it can ping that role every two hours.", value: "The Disboard bumping setup instructions have to be followed word by word. First, use the admin-exclusive command '^createBumpRole' so the bot can create a role to ping every two hours. Then, you can simply initiate the ping by using the command '^setReminder'. The command '!d bump' will have the bot to reset and restart the ping. At last, using the command '^stopBumpPing' will stop the bot from pinging the bumping ping role every two hours. If you want this in your server, please contact an adminstrator to follow the steps needed to create this function. If you're an administrator, what are you waiting for?"}, 
            { name: '\u200b', value: '\u200b'},
            { name: "6. Purge command", value: "This command can be used to delete 100 messages from a channel at once. Administrators Only."},
            


            
	        )
	        
	        
	        .setTimestamp()
            .setFooter('Hopefully you learned something! 😁');
            message.channel.send(HelpEmbed).then(console.log(`${message.author.username} has successfully executed the help command at ${date}.`))
            ;

            
        }
    });
    
  
      
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
   
    
    

   
  

  

    //The 'message' event, emitted whenever somebody says something in a text channel
client.on('message', async koolMessage => {
  if (koolMessage.content === `${prefix}coinflip`) {
    //If the message's content starts with "coinflip" run the following:
     var outcomes = ["Heads", "Tails",];
    //An array that has the possible outcomes from flipping a coin, heads and tails
    let outcomesIndex = Math.round(Math.random() * outcomes.length);
    //This will be what index of the outcomes array should be selected (arrays start at 0)
    //Math.round() rounds the parameter inside, in this case, Math.random()
    const FlipEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
  .setTitle((outcomes[outcomesIndex]))
  .setDescription(`Hey ${koolMessage.author.username}, here are the results!`)
  .setThumbnail('https://lh3.googleusercontent.com/proxy/dMWuGV2neCO0uVo2BdogYVaA8xQ-o_pEP_MMIYdpY6QcP_keD-Ovx53nh8Yh0pY-GOJGPG-6yDY7Rn7iYFd3Pe3DZpf4V8eOr095mDWrWfgcANCt2RSpyYyU')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: "Did anyone win/lose a bet?", value: "😳"},
  )
    .setTimestamp()
    .setFooter('Very nice!');
    koolMessage.channel.send(FlipEmbed)
    console.log(`${koolMessage.author.username} got ${(outcomes[outcomesIndex])} on ${date}.`)
    //'koolMessage' is what we decided to call the message in the 'message' event, above. It can be called whatever you'd like
    //'channel' is the text channel in which 'koolMessage' was sent
    //The send() function sends a message with the included argument (e.g. send("hello there!")). It must be sent in a channel, in this case, the channel in which the 'koolMessage' from the user was sent
    //If we would have outcomes[0], the output would be "Heads", if we would have outcomes[1] the output would be "Tails", so we randomize it, giving us either outcomes[0] or outcomes[1]
  }
});
client.on('message', async message => {
  if (message.content === `${prefix}vibecheck`) {
    var outcomes = ["0%", "1%", "2%", "3%", "4%", "5%", "6%", "7%", "8%", "9%", "10%", "11%", "12%", "13%", "14%", "15%", "16%", "17%", "18%", "19%", "20%", "21%", "22%", "23%", "24%", "25%", "26%", "27%", "28%", "29%", "30%", "31%", "32%", "33%", "34%", "35%", "36%", "37%", "38%", "39%", "40%", "41%", "42%", "43%", "44%", "45%", "46%", "47%", "48%", "49%", "50%", "51%", "52%", "53%", "54%", "55%", "56%", "57%", "58%", "59%", "60%", "61%", "62%", "63%", "64%", "65%", "66%", "67%", "68%", "69%", "70%", "71%", "72%", "73%", "74%", "75%", "76%", "77%", "78%", "79%", "80%", "81%", "82%", "83%", "84%", "85%", "86%", "87%", "88%", "89%", "90%", "91%", "92%", "93%", "94%", "95%", "96%", "97%", "98%", "99%", "100%",];
    let outcomesIndex = Math.round(Math.random() * outcomes.length);
    const VibeEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
  .setTitle(`${message.author.username} has a vibe percentage of:`)
  .setDescription((outcomes[outcomesIndex]))
  .setThumbnail('https://pbs.twimg.com/media/ECRsGT5U0AAmcVF.jpg')
    .setTimestamp()
    .setFooter('Very nice!');
    message.channel.send(VibeEmbed)
    console.log(`${message.author.username} got ${(outcomes[outcomesIndex])} on ${date}.`)
  }


}); 
   const InviteEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Here is the bot's OAuth2 link if you want to add Linus Bot Tips to your own Discord server!")
  .setThumbnail('https://pbs.twimg.com/media/EKM9pjTVAAIudzZ.jpg')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'Here is the invite link!', value: "https://discord.com/api/oauth2/authorize?clientuserid=611177430878519296&permissions=8&scope=bot"},
    {name: '\u200b', value: '\u200b'},
    {name: "If you want to join the bot creator's server, here it is!", value: "https://discord.gg/as3gX2A22m",}

  )
    .setTimestamp()
    .setFooter("Hope you enjoy using the bot!")

  client.on("message", (message) => {
     if(message.content === `${prefix}invite`) {
       message.channel.send(InviteEmbed)
       console.log(`${message.author.username} has used the invite link command on ${date}.`)

      }


     });
    

    
    
    client.on('message', async message => {
        if (message.content.includes("<:mongoliatrollface:744557938462687273>")) {
            const TrollRTXEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'mongoliatrollface');
            message.react(TrollRTXEmoji);
        }
    });

    client.on("message", async (message) => {
        if (message.content === `${prefix}verify check`) {
          const VerifyCheckEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle("There is already a checkmark beside your name!")
            .setThumbnail('https://cdn.discordapp.com/attachments/706933134368964608/777565641795698738/unknown.png')
            .addFields(
              {name: '\u200b', value: '\u200b'},
              {name: 'You already have the check mark besides your name!', value: `Hi ${message.author.username}, it seems that you already have the verified check mark! If you're interested, please inform a mate who doesn't have it to verify themselves!`},
            )
            .setTimestamp()
          if (message.member.displayName.endsWith("✅")) {
            return (await message.channel.send(VerifyCheckEmbed)).attachments(console.log(`Turns out ${message.author.username} is already verified! Timestamp - ${date}.`))
          }
            
        
          message.member
            .setNickname(`${message.member.displayName} ✅`)
            .catch((err) => console.log(err));
          message.react("✔");
          console.log(`Successfully verified ${message.member} on ${date}.`);
          const VerifyEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle("You're all set!")
            .setThumbnail('https://media.discordapp.net/attachments/706933134368964608/777564083704561674/unknown.png')
            .addFields(
              {name: '\u200b', value: '\u200B'},
              {name: 'You now have the check mark besides your name!', value: "Time to flex on all of them unverified plebs!? 😳"},
            )
            .setTimestamp()
            
          message.channel.send(VerifyEmbed)
        }
    });
  

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

const Bumped = require('./bump.js');

 client.on('message', async message => { 
   
    
  const BumpRole = message.guild.roles.cache.find(role => role.name === "bumping ping")
  
  
   
    if (message.content === (`${prefix}setReminder`)) {
      const bumpData = await Bumped.findById(message.guild.id)
      if (!bumpData) await Bumped.findByIdAndUpdate(message.guild.id, { $set: { LastBumped: Date.now() } }, { upsert: true })
      else if (Date.now() - bumpData.LastBumped < 7200000) return;
      await Bumped.findByIdAndUpdate(message.guild.id, { $set: { LastBumped: Date.now() } }, { upsert: true })
      if (message.channel.id === "597686606295465998") {
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
  if (message.channel.id === "597686606295465998") {
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
 

 });
  
 


    
    




client.on("voiceStateUpdate", (oldState, newState) => { // Listening to the voiceStateUpdate event
 const VCRole = newState.guild.roles.cache.find(r => r.name === "VC")
 
  if (newState.channel) { // The member connected to a channel.
    if (newState.guild.id === '597676585058828300') {
      console.log(`${newState.member.displayName} connected to ${newState.channel.name} in ${newState.guild.name}.`)
      newState.member.roles.add(VCRole)
    } else console.log(`${newState.member.displayName} connected to ${newState.channel.name} in ${newState.guild.name}.`)
  } else if (oldState.channel) { // The member disconnected from a channel.
  console.log(`${oldState.member.displayName} disconnected from ${oldState.channel.name} in ${oldState.guild.name}.`)
  if (newState.guild.id === '597676585058828300') {
      console.log(`${oldState.member.displayName} disconnected from ${oldState.channel.name} in ${oldState.guild.name}.`)
      oldState.member.roles.remove(VCRole)
      } else console.log(`${oldState.member.displayName} disconnected from ${oldState.channel.name} in ${oldState.guild.name}.`)
    
  } 
});
  client.on('message', async message => {
    if (message.content === `${prefix}haram`) {
      const attachment = new Discord.MessageAttachment(pottysimulator2077)
      message.channel.send(attachment).then(console.log(`${message.author.username} has been blessed on ${date}.`))
    }


  });

  

client.on('message', async message => {
  if (message.channel.id === "781555189941141564") {
    message.react('🔼')
          .then(() => { 
              message.react('🔽')
          });
  } 

  
});
  
  
  
  client.on('message', async message => {
    if (message.content === `${prefix}whathappenedtoEric?`) {
      const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["CarCrash",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
          const Embed = new Discord.MessageEmbed()
            .setTitle(`This happened to my buddy Eric.`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          message.channel.send(Embed);
    }
  });
  client.on('message', async message => {
        if (message.content === `${prefix}meme`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["comedyheaven", "dank", "meme", "memes", "dankmemes",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
          const Embed = new Discord.MessageEmbed()
            .setTitle(`A meme from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
                                              
       
        

       
   
   
   
    };

 

    client.on('message', async message => {
        if (message.content === `${prefix}cute`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["cute", "aww", "shiba", "cats", "dogs", "samoyeds"];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
          const Embed = new Discord.MessageEmbed()
            .setTitle(`A cute animal from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
                                              
       
        }

       
   
   
   
    });

    client.on('message', async message => {
        if (message.content === `${prefix}shiba`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["shiba",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
          const Embed = new Discord.MessageEmbed()
            .setTitle(`A cute shober from r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
                                              
       
        }

     });

    client.on('message', async message => {
        if (message.content === `${prefix}kidney failure`) {
            const api = require("imageapi.js");
          const embed = new Discord.MessageEmbed()
          let subreddits = ["Jixaw",];
          let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
          let img = await api(subreddit, true);
          const Embed = new Discord.MessageEmbed()
            .setTitle(`'Ery noice`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM")
            .setImage(img);
          
          message.channel.send(Embed);
                                              
       
        }
    })
       
   
   
   
    });
    
 

    
    client.on('message', async message => {
       if (message.content === "コック") {
           const attachment = new Discord.MessageAttachment(james)
           message.channel.send(attachment)
       }




    });
    
   
});
const reactions = ['◀️', '⏸️', '▶️']
async function paginate(message, embeds, options) {
    const pageMsg = await message.channel.send({ embed: embeds[0] })
    await pageMsg.react(reactions[0])
    await pageMsg.react(reactions[1])
    await pageMsg.react(reactions[2])

    let pageIndex = 0;
    let time = 30000;
    const filter = (reaction, user) => {
        return reactions.includes(reaction.emoji.name) && user.id === message.author.id;
    };
    if (options) {
        if (options.time) time = options.time
    }
    const collector = pageMsg.createReactionCollector(filter, { time: time });
    collector.on('collect', (reaction, user) => {
        reaction.users.remove(user)
        if (reaction.emoji.name === '▶️') {
            if (pageIndex < embeds.length-1) {
                pageIndex++
                pageMsg.edit({ embed: embeds[pageIndex] })
            } else {
                pageIndex = 0
                pageMsg.edit({ embed: embeds[pageIndex] })
            }
        } else if (reaction.emoji.name === '⏸️') {
            collector.stop()
        } else if (reaction.emoji.name === '◀️') {
            if (pageIndex > 0) {
                pageIndex--
                pageMsg.edit({ embed: embeds[pageIndex] })
            } else {
                pageIndex = embeds.length-1
                pageMsg.edit({ embed: embeds[pageIndex]})
            }
        }
    });

    collector.on('end', () => pageMsg.reactions.removeAll().catch(err => console.log(err)));
}
