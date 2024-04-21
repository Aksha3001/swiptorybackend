const express = require('express');
const router = express.Router();
const { register, login,logoutUser, getUser} = require('../controllers/user.js');
const { bookmarkStory, getAllBookmarks } = require('../controllers/bookmark.js');
const {verifyUser} = require('../middlewares/authMiddleware.js');

// auth routes 
router.post('/register', register);
router.post('/login', login);
router.post('/logout',logoutUser)
router.get('/getUser/:username',verifyUser,getUser)

// bookmark routes
router.post('/bookmark/:id', verifyUser , bookmarkStory);
router.get('/bookmarks/:userId', verifyUser , getAllBookmarks);

module.exports = router;


