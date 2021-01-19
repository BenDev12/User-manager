const User = require("../models/index");
const db = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const  Email_service = require('../providers/email/email_provider')

const { SECRET_KEY } = require("../config/config");

// POST/signup
// signup with firstName,lastName,email,password

exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user)
      return res.status(409).json({
        message: "User with this email already exist"
      });

    const newUser = new User({
      firstName,
      lastName,
      email,
      password
    });
    await newUser.save();
    await Email_service.send_mail({
      attributes:{
        user_email:email,
        user_name:lastName
      },
      template_id:'welcom'
    })
    const token = getSignedToken(newUser);
    return res.status(200).json({ token });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

// POST/login
// login with email and password.

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(404).json({
        message:
          "The email address " + req.body.email + " is not associated with any account, pleaase double check and try again"
      });

    bcrypt.compare(password, user.password).then(doMatch => {
      if (!doMatch) {
        return res.status(404).json({ message: "Incorrect email or password" });
      }
      const token = jwt.sign({ id: User._id, email: User.email }, SECRET_KEY, { expiresIn: "1h" });
      return res.status(200).json({ token });
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
// POST/AddUser

exports.addUser = async (req, res, next) => {
  try {
    const { firstName, lastName, job, email, password } = req.body;

    await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(409).json({
        message: "User with this email already exixts"
      });
    }
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      job: job,
      email: email,
      password: password
    });
    await user.save();
    await Email_service.send_mail({
      attributes:{
        user_email:email,
        user_name:lastName
      },
      template_id:'welcom'
    })
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

// GET/Users

exports.fetchUsers = async (req, res, next) => {
  try {
    await User.find().then(User => {
      if (!User) {
        return res.status(404).json({
          message: "USER NOT FOUND"
        });
      }
      return res.status(200).json({ User });
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
// GET/User
// using the user id
exports.fetchUser = async (req, res, next) => {
  try {
    const UserId = req.params.Id;
    await User.findById({ UserId });
    if (!User) {
      return res.status(404).json({
        message: "User does not exist"
      });
    }
    return res.status(200).json({ User });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
// Delete/user
// using the user ID
exports.deleteUser = async (req, res, next) => {
  try {
    const UserId = req.params.Id;
    await User.findByIdAndRemove(UserId);
    if (!User) {
      res.status(400).json({
        message: "User does not exist"
      });
    }
    return res.status(200).json({
      message: "User deleted sucessfully"
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
exports.protect = async (req, res, next) => {
  try {
    console.log("hello");
  } catch (error) {}
};
getSignedToken = User => {
  return jwt.sign(
    {
      id: User._id,
      email: User.email
    },
    SECRET_KEY,
    { expiresIn: "1hr" }
  );
};
