const {
prefix,
} = require('./config.json')
const Discord = require('discord.js')
const { getChannelId } = require('./settingWelcome.js')
module.exports = (client) => {
    client.on("guildMemberAdd", (member) => {
        // Destructure the guild property from the member object
        const { guild } = member
        // Access the channel ID for this guild from the cache
        const channelId = getChannelId(guild.id)
        console.log(member.id, member)
        const AV = member.guild.roles.cache.find(role => role.name === "Awaiting Verification")
        const BoomerRatInc = client.guilds.cache.get("597676585058828300")
        if (member.guild === (BoomerRatInc)) {
        member.roles.add(AV)
        }
        const WelcomeChannel = guild.channels.cache.get(channelId)
        WelcomeChannel.send(`Hey <@${member.id}>, Welcome to ${member.guild}! On behalf of the members of this server, I wish you a warm welcome!`)
     });
     client.on('guildMemberRemove', (member) => {
        // Destructure the guild property from the member object
        const { guild } = member
        // Access the channel ID for this guild from the cache
        const channelId = getChannelId(guild.id)
        console.log(member.id, member)
        const GoodbyeChannel = guild.channels.cache.get(channelId)
        GoodbyeChannel.send(`Goodbye <@${member.id}>, we wish you have a great time away from us!`)



     });
}
