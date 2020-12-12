const { Schema, model } = require('mongoose')

const leaderboard = Schema({
  userid: String,
  guildID: String,
  points: Number
})

module.exports = model('leaderboard', leaderboard)
 

