const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  Description: {
    type: String
  },
  UserId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  status: {
    type: String,
    enum: ["ongoing", "complete", "canceled", "rejected"],
    default: "Ongoing"
  },
  TaskId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Task" }
});
module.exports = mongoose.model("Project", projectSchema);
