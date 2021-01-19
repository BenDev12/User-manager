const express = require("express");
const router = express.Router();
const auths = require("../middleware/auth");

const ChatController = require("../controllers/chat");
const ForumController = require("../controllers/forums");

// Routers for the Forums
// create forum
router.post("/create-forum", auths, ForumController.addForum);
// fetch forums
router.get("/get-forums", ForumController.fetchForums);
// fetch forum
router.get("/get-forum", ForumController.fetchForum);
// update forum
router.patch("/update-forum", auths, ForumController.updateForum);
// Delet forum
router.delete("/delete-forum", auths, ForumController.deleteForum);

// Routers for the Chats

router.post("/new-chat", auths, ChatController.addChat);
// fetch chats
router.get("/chats", auths, ChatController.fetchChats);
// fetch chat
router.get("/chat", auths, ChatController.fetchChat);
// Delet chat
router.delete("/delete-chat", auths, ChatController.deleteChat);

module.exports = router;
