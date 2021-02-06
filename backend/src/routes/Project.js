import express from "express";
import auths from "../middleware/auth";
import * as ProjectController from "../controllers/project";
import * as TaskController from "../controllers/task";
const ProductRouter = express.Router();

// Router for projects

ProductRouter.post(
  "/api/v1/create-new/project",
  auths,
  ProjectController.addProject
);

ProductRouter.get("/api/v1/projects", ProjectController.fetchProjects);

ProductRouter.get("/api/v1/project/:Id", ProjectController.fetchProject);

ProductRouter.patch(
  "/api/v1/update-preoject/:Id",
  auths,

  ProjectController.updateProject
);

ProductRouter.delete(
  "/api/v1/delete-project/:Id",
  auths,

  ProjectController.deleteProject
);

// Router for Tasks

ProductRouter.post("/api/v1/create-new/task", auths, TaskController.addTask);

ProductRouter.get("/api/v1/tasks", TaskController.fetchTasks);

ProductRouter.get("/api/v1/single/task/: Id", TaskController.fetchTask);

ProductRouter.patch(
  "/api/v1/up-date/task/:Id",
  auths,
  TaskController.updateTask
);

ProductRouter.delete(
  "/api/v1/task/delete/:Id",
  auths,
  TaskController.deleteTask
);

export default ProductRouter;
