const express = require("express");

const AdminController = require("../controllers/Admin");

const router = express.Router();

// signup route

router.post("/signup", AdminController.signup);
// login route

router.post("/login", AdminController.login);

// add a new user

router.post("/add-user", AdminController.addUser);

// fetch user route

router.get("/get-users", AdminController.fetchUsers);

// fetch a single user

router.get("/user/:Id", AdminController.fetchUser);

// Delete user route

router.delete("/user/:Id", AdminController.deleteUser);

module.exports = router;
