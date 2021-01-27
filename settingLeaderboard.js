const {
  prefix,
} = require('./config.json')
const SLSchema = require('./setLeaderboard.js')
const cache = new Map()
// An async function to load the data
const loadData = async () => {
  // Get all stored channel IDs
  const results = await SLSchema.find({})
  // Loop through them all and set them in our map
  for (const result of results) {
    cache.set(result._id, result.channelId)
  }
}
// Invoke this function when the bot starts up
loadData()
module.exports = (client) => {
  client.on('message', async message => {
    if (message.content === `${prefix}setLeaderboardChannel`) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
    // Destructure the guild and channel properties from the message object
    const { guild, channel } = message
    // Use find one and update to either update or insert the
    // data depending on if it exists already
    await SLSchema.findOneAndUpdate(
      {
        _id: guild.id,
      },
      {
        _id: guild.id,
        channelId: channel.id,
      },
      {
        upsert: true,
      }
    )
    // Store the information in the cache
    cache.set(guild.id, channel.id)
    message.reply(`The points channel has been set to <#${channel.id}>!`)
    } else return message.reply(`Your permissions are too low! If you want to have a leaderboard channel in ${message.guild.name}, please contact an administrator!`)
    }
  });

}
module.exports.getChannelId = (guildId) => {
  return cache.get(guildId)
}
