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
const {
  HelpEmbed,
  ApprovalEmbed,
  AgreeErrorEmbed,
  YapRoleEmbed,
  YapEmbed,
  BoomerRoleEmbed,
  BoomerEmbed,
  RatEmbed,
  AccessToAllEmbed,
  AccessToAllRoleEmbed,
  AgreeAlertEmbed,
  FlipEmbed,
  VibeEmbed,
  InviteEmbed,
  VerifyCheckEmbed,
  VerifyEmbed,
  BumpRoleCreationErrorEmbed,
  BumpRoleCreationEmbed,
  BumpRoleCreationExitEmbed,
  BumpRoleErrorEmbed,
  BumpRoleEmbed,
  ReminderConfirmationEmbed,
  BumpConfirmationEmbed,
} = require('./embeds.js')


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
    if (message.content === `${prefix}leaderboard`) {
      const Users = await LeaderboardSequence.find({guildID: message.guild.id}).sort({ points: -1 })
     
      const embedArray = []
      for (var i = 0; i < Users.length % 10 + 1; i++) {
      const leaderboard = new Discord.MessageEmbed()
      .setTitle("Here is The Boomer Rat Incorporated's points leaderboard!") 
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
          if (message.member.roles.cache.some(role => role.name === "The Supreme Boomers")) {
          } else if (message.member.roles.cache.some(role => role.name === "Server Moderators")) {
          } else if (message.member.roles.cache.some(role => role.name === "Rat Majesty Robin")) {
          } else if (message.member.roles.cache.some(role => role.name === "CEO of Racism")) {

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
          
            message.channel.send(HelpEmbed).then(console.log(`${message.author.username} has successfully executed the help command at ${date}.`))
            ;

            
        }
    });
    
  
      
   client.on('message', async message => {
      
      const BoomerRole = message.guild.roles.cache.find(role => role.name === "Les boomers normaux")
      const RatRole = message.guild.roles.cache.find(role => role.name === "The normal Rat Haven dwellers")
      const BoomerHaven = client.guilds.cache.get("597676585058828300")
   
    
      
       if (message.content === "-agree") {
         if (message.member.roles.cache.some(role => role.name === "Awaiting Verification")) {
         } else return message.channel.send(AgreeErrorEmbed)  
         if (message.guild === (BoomerHaven)) {
         message.channel.send(ApprovalEmbed)
         } else if (message.guild === (YapYapInc)) {
           message.channel.send(ApprovalForYapEmbed)
         }
    
  
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
    message.channel.send(VibeEmbed)
    console.log(`${message.author.username} got ${(outcomes[outcomesIndex])} on ${date}.`)
  }


}); 
  

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
          if (message.member.displayName.endsWith("✅")) {
            return message.channel.send(VerifyCheckEmbed)
            console.log(`Turns out ${message.author.username} is already verified! Timestamp - ${date}.`)
          }
            
        
          message.member
            .setNickname(`${message.member.displayName} ✅`)
            .catch((err) => console.log(err));
          message.react("✔");
          console.log(`Successfully verified ${message.member} on ${date}.`)
            
          message.channel.send(VerifyEmbed)
        }
    });
  

 client.on('message', async message => {

    if (message.content === `${prefix}createBumpRole`) {
     
        if (message.member.roles.cache.some(role => role.name === "Server Moderators")) {
        } else if (message.member.roles.cache.some(role => role.name === "The Supreme Boomers")) {
        } else if (message.member.roles.cache.some(role => role.name === "Rat Majesty Robin")) {
        } else if (message.member.roles.cache.some(role => role.name === "CEO of Racism")) {
        } else return message.channel.send("Your permissions are too low!")
  
    
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
			message.channel.send(BumpRoleCreationExitEmbed)
      console.log(`${message.author.username} has exited the createBumpRole program. on ${date}.`)
		}
    
	})
    }
});


client.on('message', async message => {
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

    setTimeout(() => message.channel.send(`${BumpRole} chop-chop! It's time to bump! 😃`), 7200000);
      message.channel.send(BumpConfirmationEmbed).then(console.log(`${message.author.username} has bumped the server on ${date}. The timer will now reinitiate.`))
    }
  }
 

 });
  
 


    
    




client.on('voiceStateUpdate', (oldState, newState) => { 
  const testChannelOne = newState.guild.channels.cache.find(c => c.name === 'General');
  const OtherVCOne = client.guilds.cache.get("771131272167686185")
  if (newState.guild.id === (OtherVCOne)) return;
  const VCRole = newState.guild.roles.cache.find(r => r.name === "VC");
    if (!newState.channel || !newState.member) newState.member.roles.remove(VCRole).then(console.log(`${newState.member.displayName}  has exited voice channel ${testChannelOne.name} on ${date}.`)) // Triggered if the user left a channel
    if (newState.channelID === testChannelOne.id) { // Triggered when the user joined the channel we tested for
        const role = newState.guild.roles.cache.find(r => r.name === 'VC');
        if (!newState.member.roles.cache.has(role)) newState.member.roles.add(role).then(console.log(`${newState.member.displayName} has received the VC role on ${date} by joining ${testChannelOne.name}.`)) // Add the role to the user if they don't already have it
        
    }
  
});
client.on('voiceStateUpdate', (oldState, newState) => {
  const testChannelTwo = newState.guild.channels.cache.find(c => c.name === 'music');
  const OtherVCTwo = client.guilds.cache.get("771131272167686185") 
  if (newState.guild.id === (OtherVCTwo)) return;
  const VCRole = newState.guild.roles.cache.find(r => r.name === "VC");
  if (!newState.channel || !newState.member) newState.member.roles.remove(VCRole).then(console.log(`${newState.member.displayName}  has exited voice channel ${testChannelTwo.name} on ${date}.`)) // Triggered if the user left a channel
  if (newState.channelID === testChannelTwo.id) { // Triggered when the user joined the channel we tested for
        const role = newState.guild.roles.cache.find(r => r.name === 'VC');
        if (!newState.member.roles.cache.has(role)) newState.member.roles.add(role).then(console.log(`${newState.member.displayName}  has received the VC role on ${date} by joining ${testChannelTwo.name}.`)) // Add the role to the user if they don't already have it
        
    }
  
});
client.on('voiceStateUpdate', (oldState, newState) => {
  const testChannel = newState.guild.channels.cache.find(c => c.name === 'loner is chilling');
  const OtherVCThree = client.guilds.cache.get("771131272167686185") 
  if (newState.guild.id === (OtherVCThree)) return;
  const VCRole = newState.guild.roles.cache.find(r => r.name === "VC");
    if (newState.channelID === testChannel.id) { // Triggered when the user joined the channel we tested for
        const role = newState.guild.roles.cache.find(r => r.name === 'VC');
        if (!newState.member.roles.cache.has(role)) newState.member.roles.add(role).then(console.log(`${newState.member.displayName}  has received the VC role on ${date} by joining ${testChannel.name}.`)) // Add the role to the user if they don't already have it
        
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
