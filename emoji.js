const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js') 
module.exports = (client) => {
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




}
