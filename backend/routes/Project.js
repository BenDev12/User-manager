const express = require("express");
const auths = require("../middleware/auth");

const router = express.Router();

const ProjectController = require("../controllers/project");
const TaskController = require("../controllers/task");

// Router for projects

router.post("/create-new/project", auths, ProjectController.addProject);

router.get("/projects", ProjectController.fetchProjects);

router.get("/project/:Id", ProjectController.fetchProject);

router.patch("/update-preoject/:Id", auths, ProjectController.updateProject);

router.delete("/delete-project/:Id", auths, ProjectController.deleteProject);

// Router for Tasks

router.post("/create-new/task", auths, TaskController.addTask);

router.get("/tasks", TaskController.fetchTasks);

router.get("/single/task/: Id", TaskController.fetchTask);

router.patch("/up-date/task/:Id", auths, TaskController.updateTask);

router.delete("/task/delete/:Id", auths, TaskController.deleteTask);

module.exports = router;
