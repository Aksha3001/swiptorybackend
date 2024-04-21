const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true,trim:true },
  password: { type: String, required: true,trim:true},
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
    },
  ],
});


module.exports = mongoose.model('User', userSchema);