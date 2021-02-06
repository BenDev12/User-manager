import mongoose from "mongoose";

const Schema = mongoose.Schema;

const forumSchema = new Schema({
  Topic: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   // required: true,
  //   ref: "User"
  // },
  comment: {
    type: String,
  },
  likes: {
    type: Boolean,
  },
});
const Forum = mongoose.model("Forum", forumSchema);

export default Forum;
