const express = require("express");
const router = express.Router();
const { verifyUser } = require("../middlewares/authMiddleware.js");
const {
  createStory,
  getStories,
  getStoryById,
  updateStory,
} = require("../controllers/story.js");
const { likeStory } = require("../controllers/like.js");


// routes
router.post("/create", verifyUser, createStory);
router.get("/getAllStories", getStories);
router.get("/getStoryById/:storyId", getStoryById);
router.put("/updateStory/:id", verifyUser, updateStory);
router.put("/updatelikeStory/:id", verifyUser, likeStory);

module.exports = router;
