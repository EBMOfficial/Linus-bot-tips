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
mongoose.connect('mongodb+srv://EBM1:4quidsmelloff@cluster0.0reiq.mongodb.net/4quiddebt?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
});
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

const ApprovalEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('Hi there new user!')
    .setDescription('Please use either one of the comamnds in order to get a role.')
    .addFields(
      { name: '\u200B', value: '\u200B'},
      { name: 'Essential server roles', value: 'The command "^giveBoomerRole" gives you the "Les boomers normaux" role, the command ^giveYapRole will give you access to YapYap Inc. and the command "^giveRatRole" gives you the "The normal Rat Haven dwellers" role.'},
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

  const ModChannelOne = client.channels.cache.get("597686739318079489") 
    const ModChannelThree = message.guild.channels.cache.find(channel => channel.name === "agree-to-the-rules");
    
         const AgreeAlertEmbed = new Discord.MessageEmbed()
         .setTitle(`Alert! A new user is seeking approval!`)
         .setDescription(`${message.author.username} is currently seeking in approval in ${ModChannelThree}. Go approve them now!`)
         .setTimestamp()
         .setFooter("For administrators. Brought to you by EBMOfficial and the magic of discord.js.")
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
const VibeEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
  .setTitle(`${message.author.username} has a vibe percentage of:`)
  .setDescription((outcomes[outcomesIndex]))
  .setThumbnail('https://pbs.twimg.com/media/ECRsGT5U0AAmcVF.jpg')
    .setTimestamp()
    .setFooter('Very nice!');
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

 const VerifyCheckEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle("There is already a checkmark beside your name!")
            .setThumbnail('https://cdn.discordapp.com/attachments/706933134368964608/777565641795698738/unknown.png')
            .addFields(
              {name: '\u200b', value: '\u200b'},
              {name: 'You already have the check mark besides your name!', value: `Hi ${message.author.username}, it seems that you already have the verified check mark! If you're interested, please inform a mate who doesn't have it to verify themselves!`},
            )
            .setTimestamp()

const VerifyEmbed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle("You're all set!")
            .setThumbnail('https://media.discordapp.net/attachments/706933134368964608/777564083704561674/unknown.png')
            .addFields(
              {name: '\u200b', value: '\u200B'},
              {name: 'You now have the check mark besides your name!', value: "Time to flex on all of them unverified plebs!? 😳"},
            )
            .setTimestamp()

const BumpRoleCreationErrorEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(`Hi ${message.author.username}!`)
            .setDescription("It seems that the bumping ping role already exists in this server!")
            .setThumbnail("https://i.ytimg.com/vi/hAsZCTL__lo/maxresdefault.jpg")
            .setTimestamp()
            .setFooter("For everyone, by EBMOfficial and the magic of discord.js.")

const BumpRoleCreationEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
      .setTitle(`Hi there ${message.author.username}!`)
     .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/e/e4/Linus_Sebastian_Screenshot_From_Youtube_August_5_2013.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: 'Do you want to create a role for bumping?', value: "Click on either the check mark or cross depending on your choice."},
    )

const BumpRoleCreationExitEmbed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setTitle(`Hi ${message.author.username}!`)
          .setDescription("Thank you for your response. You have exited this program.")
          .setThumbnail("")
          .setTimestamp()
          .setFooter("For administrators, by EBMOfficial and the magic of discord.js.")

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
const ReminderConfirmationEmbed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Interval has been set!`)
     .setThumbnail('https://cdn.discordapp.com/attachments/772088888561762314/777271020322160650/unknown.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: `Hi ${message.author.username}`, value: "Please check back every two hours to bump the server."}
    )

const BumpConfirmationEmbed = new Discord.MessageEmbed()
      .setTitle(`Bump confirmed!`)
     .setThumbnail('https://cdn.discordapp.com/attachments/772088888561762314/777271020322160650/unknown.png')
    .addFields(
    {name: '\u200b', value: '\u200B'},
    {name: `Hi ${message.author.username}`, value: "Thank you for bumping the server! I will remind you in two hours' time to bump it again."}
    )

        
