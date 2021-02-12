import express from "express";
import auths from "../middleware/auth";
import * as ChatController from "../controllers/chat";
import * as ForumController from "../controllers/forums";
const SocialRouter = express.Router();

const router = express.Router();

// Routers for the Forums
// create forum
// SocialRouter.post("/api/v1/create-forum", auths, ForumController.addForum);
// // fetch forums
// SocialRouter.get("/api/v1/get-forums", ForumController.fetchForums);
// // fetch forum
// SocialRouter.get("/api/v1/get-forum", ForumController.fetchForum);
// // update forum
// SocialRouter.patch("/api/v1/update-forum", auths, ForumController.updateForum);
// // Delet forum
// SocialRouter.delete("/api/v1/delete-forum", auths, ForumController.deleteForum);

// Routers for the Chats

SocialRouter.post("/api/v1/new-chat", auths, ChatController.addChat);
// fetch chats
SocialRouter.get("/api/v1/chats", ChatController.fetchChats);
// fetch chat
router.get("/api/v1/chat", ChatController.fetchChat);
// Delet chat
SocialRouter.delete("/api/v1/delete-chat", auths, ChatController.deleteChat);

module.exports = SocialRouter;
