import Project from "../models/Project";
import forum from "../models/forum";

export const addProject = async (req, res, next) => {
  const { role } = req.user.role;
  if (role !== "admin")
    return res.status(403).json({
      status: 0,
      success: false,
      message: "You are not Authorized",
    });
  var name = req.user.name;
  const { title, Description } = req.body;
  if (!req.body)
    return res.status(400).json({
      message: "Enter required fields",
    });
  try {
    const project = await Project.findOne({ title: title });
    if (project)
      return res
        .status(403)
        .json({ message: "Project already exist, do you want to overwrite?" });
    console.log(name);
    const project_obj = new Project({
      title,
      Description,
      createdby: name,
    });
    // console.log(project);
    await project_obj.save();
    return res
      .status(201)
      .json({ message: "Projected add sucessfully", data: project_obj });
  } catch (error) {
    return res
      .status(error.code || 500)
      .json({ message: error.message, success: false });
  }
};

export const fetchProjects = async (req, res, next) => {
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

export const fetchProject = async (req, res, next) => {
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
export const updateProject = async (req, res, next) => {
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
export const deleteProject = async (req, res, next) => {
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
