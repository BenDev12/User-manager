import express from "express";
import auths from "../middleware/auth";
import * as AdminController from "../controllers/Admin";
import userLoader from "../middleware/userLoader";

const AdminRouter = express.Router();

// signup route

AdminRouter.post("/api/v1/signup", AdminController.signup);
// login route

AdminRouter.post("/api/v1/login", AdminController.login);

// router.post("/protected", AdminController.protect);

AdminRouter.post("/api/v1/add-user", auths, AdminController.addUser);

// fetch user route

AdminRouter.get("/api/v1/get-users", AdminController.fetchUsers);

// fetch a single user

AdminRouter.get("/api/v1/get-user/:Id", AdminController.fetchUser);

// Delete user route

AdminRouter.delete("/api/v1/user/:Id", auths, AdminController.deleteUser);

export default AdminRouter;
