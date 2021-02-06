import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  Description: {
    type: String,
  },
  createdby: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  status: {
    type: String,
    required: true,
    default: "upublished",
  },
  isDraft: { type: Boolean, default: true },
  TaskId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});
const Project = mongoose.model("Project", projectSchema);

export default Project;
