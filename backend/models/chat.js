const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  message: {
    type: String
  },
  time: {
    type: Date,
    required: true,
    default: Date.now()
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});
module.exports = mongoose.model("Chat", chatSchema);
