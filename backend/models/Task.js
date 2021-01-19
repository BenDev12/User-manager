const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  _projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Project"
  },
  status: {
    type: String,
    enum: ["ongoing", "complete", "canceled", "rejected"],
    default: "Ongoing"
  }
});

UserTask.methods.getStatus = function() {
  switch (complete) {
    case status.complete:
      return "complete";
    case status.canceled:
      return "canceled";
    case status.rejected:
      return "rejected";
    default:
      return "ongoing";
  }
};

module.exports = mongoose.model("Task", TaskSchema);
