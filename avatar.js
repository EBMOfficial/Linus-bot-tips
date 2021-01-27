const {
  prefix,
} = require('./config.json')
const Discord = require('discord.js')
module.exports = (client) => {
client.on('message', async message => {
if(message.content.startsWith(prefix+'avatar')){
  if(message.mentions.users.size){
    let member=message.mentions.users.first()
        if(member){
            const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
            message.channel.send(emb)
            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{
            const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
            message.channel.send(emb)
        }
}  



  });

}
