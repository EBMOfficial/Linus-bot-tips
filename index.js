const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("idk go to subscribe to these crap channels https://www.youtube.com/channel/UCzYKkoDPi123pud9cD52kVQ https://www.youtube.com/channel/UCN71MPn8AwcIMhGNO-ZfFvg"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));


// START BOT CODE


const Discord = require('discord.js')
const {
    prefix,
    token,
    text1,
    text2,
    trumpurl,
    help,
    america,
    shrek,
    james,
    pottysimulator2077,
    idkcatfailure,

} = require('./config.json')
const ytdl = require('ytdl-core')
const client = new Discord.Client();
const config = require("./config.json")
client.login(token);
const queue = new Map()
const path = require("path");
client.setMaxListeners(10000000);


client.on('ready', () => {

    console.log("Connected as " + client.user.tag)

    
    
    client.user.setActivity("Kidney failure unfold | ^help", { type: "WATCHING" })
    
    

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(`${channel.name} ${channel.type} ${channel.id}`)
        })

    });
  
  

  client.on('message', async message => {
    if (message.content === `${prefix}depressedcat`) {
      message.channel.send(idkcatfailure)
      
    }

  });
  
   
    client.on('message', async message => {
        
        if (message.content === `${prefix}purge`) {
          if (message.member.roles.cache.some(role => role.name === "The Supreme Boomers")) {
          } else if (message.member.roles.cache.some(role => role.name === "Server Moderators")) {
          } else if (message.member.roles.cache.some(role => role.name === "Rat Majesty Robin")) {
          } else if (message.member.roles.cache.some(role => role.name === "CEO")) {
          } else if (message.member.roles.cache.some(role => role.name === "Heir to the server")) {
          } else if (message.member.roles.cache.some(role => role.name === "Alphas(tier 3 mods)")) {
          } else if (message.member.roles.cache.some(role => role.name === "Big boss peeps(tier 2 mods)")) {
          } else if (message.member.roles.cache.some(role => role.name === "lieutenant(tier 1 mods)")) {
          } else return message.channel.send("Your permissions are too low to execute this command!")
            message.channel.bulkDelete(100)
                    .then(messages => console.log(`${message.author.username} has bulk deleted ${messages.size} messages`))
                    ;
               
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
            { name: "3. Having access to both compartments", value: "Using the command '^AccessToBoth' will give you the 'Access to both compartments' role."},
            { name: '\u200B', value: '\u200B' },
            { name: "4. Wholesome and funny commands", value: "Using the command '^meme' will relay a meme from your beloved subreddits in the form of an embed. Using the command '^cute' will relay an image of a very cute animal through an embed. At last, using the command '^shiba' will relay an image of one of the cutest dogs ever, the Shiba Inu, through an embed."},
            { name: '\u200B', value: '\u200B' },
            { name: "5. Reminders for Disboard Bumping, and an admin-exclusive role creating command which enables the bot to create a bumping ping role, so it can ping that role every two hours.", value: "The Disboard bumping setup instructions have to be followed word by word. First, use the admin-exclusive command '^createBumpRole' so the bot can create a role to ping every two hours. Then, you can simply initiate the ping by using the command '^setReminder'. The command '!d bump' will have the bot to reset and restart the ping. At last, using the command '^stopBumpPing' will stop the bot from pinging the bumping ping role every two hours. If you want this in your server, please contact an adminstrator to follow the steps needed to create this function. If you're an administrator, what are you waiting for?"}, 
            { name: '\u200b', value: '\u200b'},
            { name: "6. Purge command", value: "This command can be used to delete 100 messages from a channel at once. Administrators Only."},

            
	        )
	        
	        
	        .setTimestamp()
            .setFooter('Hopefully you learned something! 😁');
            message.channel.send(HelpEmbed).then(console.log(`${message.author.username} has successfully executed the help command.`))
            ;

            
        }
    });
    const ApprovalEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Hi there new user!')
    .setDescription('Please use either one of the comamnds in order to get a role.')
    .addFields(
      { name: '\u200B', value: '\u200B'},
      { name: 'Essential server roles', value: 'The command "^giveBoomerRole" gives you the "Les boomers normaux" role, and the command "^giveRatRole" gives you the "The normal Rat Haven dwellers" role.'},
       { name: '\u200B', value: '\u200B'},
      { name: 'Please read this.', value: 'Using the command "^giveBoomerRole" will give you access to only the Boomer Haven compartment, and the comamand "^giveRatRole" will give you access to the Rat Haven compartment. '},
      { name: '\u200B', value: '\u200B'},
      {name: 'Read this as well.', value: 'To get access to both of these compartments, please consider using the command "^AccessToBoth" to receive the "Access to both compartments" role.'},
      { name: '\u200b', value: '\u200b'},
      { name: "Have some patience. A moderator will be with you in a bit!", value: "After you have used the command '-agree', please use either one of the commands, depending on which compartment you want to enter. A moderator will approve you shortly."}
      )
      .setTimestamp()
      .setFooter('Time to pick a role!');

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
      
   client.on('message', async message => {
      const AgreeErrorEmbed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(`Hello there ${message.author.username}!`)
      .setThumbnail('https://i.ytimg.com/vi/hAsZCTL__lo/maxresdefault.jpg')
      .setDescription("It seems that you have already been verified!")
    
       if (message.content === "-agree") {
         if (message.member.roles.cache.some(role => role.name === "Awaiting Verification")) {
         } else return message.channel.send(AgreeErrorEmbed)
         console.log(`${message.author.username} is currently seeking approval.`)
         const ModChannelOne = client.channels.cache.get('597686739318079489') 
         const AgreeAlertEmbed = new Discord.MessageEmbed()
         .setTitle(`Alert! A new user is seeking approval!`)
         .setDescription(`${message.author.username} is currently seeking in approval in <#742806434810691585>. Go approve them now!`)
         .setTimestamp()
         .setFooter("For administrators. Brought to you by EBMOfficial and the magic of discord.js.")
         ModChannelOne.send(AgreeAlertEmbed)
         ModChannelOne.send("<@&597678223555559434> <@&597677756846702602> <@&759369721572622387>")
         message.channel.send(ApprovalEmbed)
         
         
        } 
       
    
    });
    
    client.on('message', async message => { 
      const WillSwagEmoji = message.guild.emojis.cache.find(emoji => emoji.name === "willoff")
      if (message.content.includes("<:willoff:777374076146679898")) {
        message.react(WillSwagEmoji)
      }
    });

  
   client.on('message', async message => {
     if (message.content === `${prefix}giveBoomerRole`) {
       var BoomerRole = message.member.guild.roles.cache.find(role => role.name === "Les boomers normaux")
       const BoomerRoleEmbed = new Discord.MessageEmbed()
       .setColor("RED")
       .setTitle(`Hi ${message.author.username}`)
       .setDescription("It seems that you already have the Boomer Haven role!")
       .setThumbnail("https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F032%2F558%2Ftemp6.jpg")
       if (message.member.roles.cache.some(role => role.name === "Les boomers normaux")) return message.channel.send(BoomerRoleEmbed).then(console.log(`${message.author.username} tried to give themselves the Boomer Haven role, but it turns out that they already have it!`))
      
       else message.member.roles.add(BoomerRole).then(message.channel.send(BoomerEmbed))
       console.log(`Successfully have BoomerRole to ${message.author.username}.`)
     } else if (message.content === `${prefix}giveRatRole`) {
      var RatRole = message.member.guild.roles.cache.find(role => role.name === "The normal Rat Haven dwellers") 
      const RatRoleEmbed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle(`Hi ${message.author.username}`)
      .setDescription("It seems that you already have the Rat Haven role!")
      .setThumbnail("https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F032%2F558%2Ftemp6.jpg")
      if (message.member.roles.cache.some(role => role.name === "The normal Rat Haven dwellers")) return message.channel.send(RatRoleEmbed).then(console.log(`${message.author.username} tried to give themselves the Rat Haven role, but it turns out that they already have it!`))
      message.member.roles.add(RatRole)
      message.channel.send(RatEmbed)
      console.log(`Successfully gave RatRole to ${message.author.username}.`)
      
     }
    });
   const AccessToBothEmbed = new Discord.MessageEmbed()
   .setColor('GREEN')
  .setTitle('Great success!')
  .setDescription("Chenquieh! Please read the following.")
  .setThumbnail('https://www.indiewire.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-30-at-3.50.42-PM.png?w=780')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'I have added the "Access to both compartments" role to your profile', value: "You now have access to both compartments of the server. Great success!"},
  )
    .setTimestamp()
    .setFooter('Very nice!');
   client.on('message', async message => {
     if (message.content === `${prefix}AccessToBoth`) {
       message.channel.bulkDelete(1)
     var role = message.member.guild.roles.cache.find(role => role.name === "Access to both compartments");
     message.member.roles.add(role);
     
      message.channel.send(AccessToBothEmbed)

     
     console.log(`Successfully gave ${role} to ${message.author.username}`)
     
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
  .setDescription("Here are the results!")
  .setThumbnail('https://lh3.googleusercontent.com/proxy/dMWuGV2neCO0uVo2BdogYVaA8xQ-o_pEP_MMIYdpY6QcP_keD-Ovx53nh8Yh0pY-GOJGPG-6yDY7Rn7iYFd3Pe3DZpf4V8eOr095mDWrWfgcANCt2RSpyYyU')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: "Did anyone win/lose a bet?", value: "😳"},
  )
    .setTimestamp()
    .setFooter('Very nice!');
    koolMessage.channel.send(FlipEmbed)
    console.log(`${koolMessage.author.username} got ${(outcomes[outcomesIndex])}`)
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
    console.log(`${message.author.username} got ${(outcomes[outcomesIndex])}.`)
  }


}); 
   const InviteEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("Here is the bot's OAuth2 link if you want to add Linus Bot Tips to your own Discord server!")
  .setThumbnail('https://pbs.twimg.com/media/EKM9pjTVAAIudzZ.jpg')
  .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'Here is the invite link!', value: "https://discord.com/api/oauth2/authorize?client_id=611177430878519296&permissions=8&scope=bot"},
    {name: '\u200b', value: '\u200b'},
    {name: "If you want to join the bot creator's server, here it is!", value: "https://discord.gg/as3gX2A22m",}

  )
    .setTimestamp()
    .setFooter("Hope you enjoy using the bot!")

  client.on("message", (message) => {
     if(message.content === `${prefix}invite`) {
       message.channel.send(InviteEmbed)
       console.log(`${message.author.username} has used the invite link command.`)

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
            return message.channel.send(VerifyCheckEmbed)
            console.log(`Turns out ${message.author.username} is already verified!`)
          }
            
        
          message.member
            .setNickname(`${message.member.displayName} ✅`)
            .catch((err) => console.log(err));
          message.react("✔");
          console.log(`Successfully verified ${message.member.username}`);
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
const BumpRoleCreationErrorEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`Hi ${message.author.username}!`)
            .setDescription("It seems that the bumping already exists in this server!")
            .setThumbnail("https://i.ytimg.com/vi/hAsZCTL__lo/maxresdefault.jpg")
            .setTimestamp()
            .setFooter("For everyone, by EBMOfficial and the magic of discord.js.")

    if (message.content === `${prefix}createBumpRole`) {
     
        if (message.member.roles.cache.some(role => role.name === "Server Moderators")) {
        } else if (message.member.roles.cache.some(role => role.name === "The Supreme Boomers")) {
        } else if (message.member.roles.cache.some(role => role.name === "Rat Majesty Robin")) {
        } else if (message.member.roles.cache.some(role => role.name === "CEO")) {
        } else if (message.member.roles.cache.some(role => role.name === "Heir to the server")) {
        } else if (message.member.roles.cache.some(role => role.name === "Alphas(tier 3 mods)")) {
        } else if (message.member.roles.cache.some(role => role.name === "Big boss peeps(tier 2 mods)")) {
        } else if (message.member.roles.cache.some(role => role.name === "lieutenant(tier 1 mods)")) {
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
            if (message.guild.roles.cache.find(role => role.name === "bumping ping")) return message.channel.send(BumpRoleCreationErrorEmbed).then(console.log(`${message.author.username} tried to create a bumping ping role, but it turns out that the role already exists in the guild!`))
            else (message.guild.roles.create)({
                data: {
                  name: 'bumping ping',
                  color: 'BLUE',
                },
                reason: 'We needed a role for people who regularly bump the server.',
              })
              message.channel.send(`Hey ${message.author.username}, thank you for creating the bumping ping role. You can now assign it to people who regularly bump the server!`)
              console.log(`${message.author.username} has successfully created the bumping ping role.`)
    
     
        } else if (reaction.emoji.name === '❌') {
          const BumpRoleCreationExitEmbed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle(`Hi ${message.author.username}!`)
          .setDescription("Thank you for your response. You have exited this program.")
          .setThumbnail("")
          .setTimestamp()
          .setFooter("For administrators, by EBMOfficial and the magic of discord.js.")
			message.channel.send(BumpRoleCreationExitEmbed)
      console.log(`${message.author.username} has exited the createBumpRole program.`)
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
   } else message.member.roles.add(BumpRole).then(message.channel.send(BumpRoleEmbed)).then(console.log(`${message.author.username} has been given the bumping ping role by me.`))
     
    
 }


});


let intervalOne = setInterval(() => {}, 7200000);
 client.on('message', async message => {
  
   
    if (message.content === (`${prefix}setReminder`)) {
      message.channel.bulkDelete(1)
      const ReminderConfirmationEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Interval has been set!`)
     .setThumbnail('https://cdn.discordapp.com/attachments/772088888561762314/777271020322160650/unknown.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: `Hi ${message.author.username}`, value: "Please check back every two hours to bump the server."}
    )
        message.channel.send(ReminderConfirmationEmbed)
        console.log(`${message.author.username} has set the 2 hour Disboard bump reminder.`)
        var role = message.guild.roles.cache.find(role => role.name === "bumping ping")
        intervalOne = setInterval(() => {
            message.channel.send(`${role} chop-chop! It's time to bump! 😃`)
            console.log("Succesfully reminded members with bumping ping role to bump.")
        }, 7200000);
    }
    
});


client.on('message', async message => {
    if(message.content === '!d bump') {
    
      const pingRole = message.guild.roles.cache.find(role => role.name === 'bumping ping');
      const BumpConfirmationEmbed = new Discord.MessageEmbed()
      .setTitle(`Bump confirmed!`)
     .setThumbnail('https://cdn.discordapp.com/attachments/772088888561762314/777271020322160650/unknown.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: `Hi ${message.author.username}`, value: "Thank you for bumping the server! I will remind you in two hours' time to bump it again."}
    )
      message.channel.send(BumpConfirmationEmbed)
      console.log(`${message.author.username} has bumped the server. The timer will now reinitiate.`)
      setTimeout(() => message.channel.send(`${pingRole} chop-chop! It's time to bump! 😃`), 7200000);
    }
    
});

client.on('message', async message => {
 if (message.content === `${prefix}stopBumpPing`) {
   
   message.channel.bulkDelete(1)
   clearInterval(intervalOne)
   const BumpCancellationEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Bump reminder has been called off!")
     .setThumbnail('https://cdn.discordapp.com/attachments/772088888561762314/777271020322160650/unknown.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: `Hi ${message.author.username}`, value: "You have successfully stopped the bump reminder. Please use either '^setReminder' or '!d bump' to reinitiate the reminder."}
    )
   message.channel.send(BumpCancellationEmbed)
   console.log(`${message.author.username} has stopped the 2 hour Disboard bump reminder in their server.`)
 }




});

client.on('voiceStateUpdate', (oldState, newState) => { 
  const VCRole = newState.guild.roles.cache.find(r => r.name === "VC");
    if (!newState.channel || !newState.member) newState.member.roles.remove(VCRole).then(console.log(`${newState.member} has exited the voice channel.`)) // Triggered if the user left a channel
    const testChannel = newState.guild.channels.cache.find(c => c.name === 'General');
    if (newState.channelID === testChannel.id) { // Triggered when the user joined the channel we tested for
        const role = newState.guild.roles.cache.find(r => r.name === 'VC');
        if (!newState.member.roles.cache.has(role)) newState.member.roles.add(role).then(console.log(`${newState.member} has received the VC role.`)) // Add the role to the user if they don't already have it
        
    }
});
client.on('voiceStateUpdate', (oldState, newState) => {
  const VCRole = newState.guild.roles.cache.find(r => r.name === "VC");
    if (!newState.channel || !newState.member) newState.member.roles.remove(VCRole).then(console.log(`${newState.member} has exited the voice channel.`)) // Triggered if the user left a channel
    const testChannel = newState.guild.channels.cache.find(c => c.name === 'music');
    if (newState.channelID === testChannel.id) { // Triggered when the user joined the channel we tested for
        const role = newState.guild.roles.cache.find(r => r.name === 'VC');
        if (!newState.member.roles.cache.has(role)) newState.member.roles.add(role).then(console.log(`${newState.member} has received the VC role.`)) // Add the role to the user if they don't already have it
        
    }
});
client.on('voiceStateUpdate', (oldState, newState) => {
  const VCRole = newState.guild.roles.cache.find(r => r.name === "VC");
    if (!newState.channel || !newState.member) newState.member.roles.remove(VCRole).then(console.log(`${newState.member} has exited the voice channel.`)) // Triggered if the user left a channel
    const testChannel = newState.guild.channels.cache.find(c => c.name === 'loner is chilling');
    if (newState.channelID === testChannel.id) { // Triggered when the user joined the channel we tested for
        const role = newState.guild.roles.cache.find(r => r.name === 'VC');
        if (!newState.member.roles.cache.has(role)) newState.member.roles.add(role).then(console.log(`${newState.member} has received the VC role.`)) // Add the role to the user if they don't already have it
        
    }
});
  client.on('message', async message => {
    if (message.content === `${prefix}haram`) {
      const attachment = new Discord.MessageAttachment(pottysimulator2077)
      message.channel.send(attachment).then(console.log(`${message.author.username} has been blessed.`))
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
       if (message.content === "コック") {
           const attachment = new Discord.MessageAttachment(james)
           message.channel.send(attachment)
       }




    });
    client.on('message', async message => {
        if (message.author.username === "Dank Memer") {
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'shrek');
            message.react(reactionEmoji);
        }
    });

    client.on('message', async message => {
        if (message.content.startsWith("pls")) {
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'shrek');
            message.react(reactionEmoji);
        }
    });

    client.on('message', async message => {
        if (message.content.startsWith("Pls")) {
            const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'shrek');
            message.react(reactionEmoji);
        }
    });

   
  
});