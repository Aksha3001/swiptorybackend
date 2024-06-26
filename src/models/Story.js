const mongoose = require("mongoose");

const storySchema = new mongoose.Schema(
  {
    slides: [
      {
        heading: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
          lowercase: true
        },
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        username: String,
      },
    ],
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        username: String,
      },
    ],

    totalLikes: {
      type: Number,
      default: 0,
    },

    addedBy: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", storySchema);
