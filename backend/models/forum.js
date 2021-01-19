const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const forumSchema = new Schema({
  Topic: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // required: true,
  //   ref: "User"
  // },
  comment: {
    type: String
  },
  likes: {
    type: Boolean
  }
});
module.exports = mongoose.model("Forum", forumSchema);
