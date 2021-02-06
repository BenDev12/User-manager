import mongoose from "mongoose";

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  message: {
    type: String,
  },
  time: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});
const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
