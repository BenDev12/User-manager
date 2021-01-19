const Project = require("../models/Project");
const db = require("../config/db");
const forum = require("../models/forum");

exports.addProject = async (req, res, next) => {
  try {
    const { title, Description } = req.body;
    await Project.findById({ title: title });
    if (Project)
      return res
        .status(403)
        .json({ message: "Project already exist, do you want to overwrite?" });

    const newProject = new Project({
      title,
      Description,
      TaskId,
      Userid: req.params,
    });
    await newProject.save();
    return res.status(201).json({ message: "Projected add sucessfully" });
  } catch (error) {
    return res
      .status(error.code || 500)
      .json({ message: error.message, success: false });
  }
};

exports.fetchProjects = async (req, res, next) => {
  try {
    await Project.find();
    if (!Project)
      return res
        .status(404)
        .json({ message: "There are no projects to be loaded" });
    return res.status(200).json({ Project });
  } catch (error) {
    return res
      .status(error.code || 500)
      .json({ message: error.message, success: false });
  }
};

exports.fetchProject = async (req, res, next) => {
  try {
    const ProjId = req.params.Id;
    await Project.findById(ProjId);
    if (!Project) return res.status(404).json({ message: "project not found" });
    return res.status(200).json({ Project });
  } catch (error) {
    return res
      .status(error.code || 500)
      .json({ message: error.message, success: false });
  }
};
exports.updateProject = async (req, res, next) => {
  try {
    const ProjId = req.params.Id;
    await Project.findByIdAndUpdate(ProjId);
    if (error)
      return res
        .status(403)
        .json({ message: "Could not sucessfully update the project" });
    return res.status(200).json({ message: "project updated sucessfully" });
  } catch (error) {
    return res
      .status(error.code || 500)
      .json({ message: error.message, success: false });
  }
};
exports.deleteProject = async (req, res, next) => {
  try {
    const ProjId = req.params.Id;
    await Project.findByIdAndDelete(ProjId);
    if (!Project)
      return res.status(404).json({ message: "Product does not exist" });
    return res.status(200).json({ message: "Project deleted sucessfully" });
  } catch (error) {
    return res
      .status(error.code || 500)
      .json({ message: error.message, success: false });
  }
};
