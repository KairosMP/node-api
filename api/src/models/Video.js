const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  liked: {
    type: String,
    default: false,
  },
})

module.exports = mongoose.model('video', videoSchema)