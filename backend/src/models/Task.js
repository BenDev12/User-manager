const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  _projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Project",
  },
  status: {
    type: String,
    required: true,
    default: "Ongoing",
  },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
