const Chat = require("../models/chat");
const db = require("../config/db");
const chat = require("../models/chat");

exports.addChat = async (req, res, next) => {
  try {
    const { message } = req.body;
    const newChat = new Chat({
      message,
    });
    await newChat.save();
    return res.status(200).json({ message: "Message sucessfully sent" });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

exports.fetchChats = async (req, res, next) => {
  try {
    await chat.find();
    if (!chat) return res.status.jso({ message: "No chats" });
    return res.status(200).json({ Chat });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

exports.fetchChat = async (req, res, next) => {
  try {
    const chatId = req.params.Id;
    await chat.findById(chatId);
    if (!chat) return res.status(404).json({ message: "No chats" });
    return res.status(200).json({ chat });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

exports.deleteChat = async (req, res, next) => {
  try {
    const chatId = req.params.Id;
    await Chat.findByIdAndDelete(chatId);
    if (!chat) return res.status(404).json({ message: "Failed to delete" });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
