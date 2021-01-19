const express = require("express");
const auths = require("../middleware/auth");

const AdminController = require("../controllers/Admin");

const router = express.Router();

// signup route

router.post("/signup", AdminController.signup);
// login route

router.post("/login", AdminController.login);

// add a new user
// test
// router.post("/protected", AdminController.protect);

router.post("/add-user", auths, AdminController.addUser);

// fetch user route

router.get("/get-users", auths, AdminController.fetchUsers);

// fetch a single user

router.get("/get-user/:Id", auths, AdminController.fetchUser);

// Delete user route

router.delete("/user/:Id", auths, AdminController.deleteUser);

module.exports = router;
