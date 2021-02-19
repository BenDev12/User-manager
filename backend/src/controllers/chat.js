import Chat from "../models/chat";
import chat from "../models/chat";
import * as io from "socket.io";

export const addChat = async (req, res, next) => {
  const name = req.user.name;
  const userId = req.user.id;
  try {
    const { message } = req.body;
    const chat = new Chat({
      message,
      author: userId,
      name: name,
    });

    await chat.save();
    // const room = `${chat.model_id}#${chat.user}`;
    // io.sockets.in(room).emit("newmessage", JSON.stringify(chat));
    io.on("connection", (socket) => {
      socket.on("message", (chat) => {
        socket.broadcast.emit("message", chat);
      });
    });
    return res.status(200).json({
      message: "Message sucessfully sent",
      data: chat,
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const fetchChats = async (req, res, next) => {
  try {
    await chat.find();
    if (!chat) return res.status.jso({ message: "No chats" });
    return res.status(200).json({ Chat });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

export const fetchChat = async (req, res, next) => {
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

export const deleteChat = async (req, res, next) => {
  try {
    const chatId = req.params.Id;
    await Chat.findByIdAndDelete(chatId);
    if (!chat) return res.status(404).json({ message: "Failed to delete" });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
