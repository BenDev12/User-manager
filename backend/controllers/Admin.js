const bcrypt = require("bcrypt");
const User = require("../models/index");
const db = require("../config/config");

// POST/signup
// signup with firstName,lastName,email,password

exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    await User.findOne({ email: email })
      .exec()
      .then(UserDoc => {
        if (UserDoc) {
          return res.status(409).json({ message: "User already exists" });
        } else {
          bcrypt.hash(password, 12).then(hashedPassword => {
            const user = new User({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: hashedPassword
            });

            user.save().then(result => {
              res.status(201).json({ result });
            });
          });
        }
      });
  } catch (error) {
    if ((error = "")) {
      return res.status(500).json({
        message: "Generic server error"
      });
    }
  }
};

// POST/login
// login with email and password.

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await User.findOne({ email: email }, User => {
      if (User) {
        return res.status(404).json({
          message:
            "The email address" + req.body.email + "is not associated with any account, pleaase double check and try again"
        });
      } else {
        bcrypt.compare(password, req.body.password).then(doMatch => {
          if (doMatch) {
            return res.status(404).json({ message: "Incorrect email or password" });
          } else {
            return res.status(200).json({ message: "logged in sucessfully" });
          }
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Generic server error" });
  }
};
// POST/AddUser

exports.addUser = async (req, res, next) => {
  try {
    const { firstName, lastName, job, email, password } = req.body;

    User.findOne({ email: req.body.email });

    if (User) {
      return res.status(409).json({
        message: "User with this email already exixts"
      });
    } else {
      const user = new User({
        firstName: firstName,
        lastName: lastName,
        job: job,
        email: email,
        password: password
      });
      await user.save().then(User => {
        return res.status(201).json(User);
      });
    }
  } catch (error) {
    if ((error = "validationError")) {
      return res.status(500).json({ error: "Pleaase try again" });
    }
  }
};

// GET/Users

exports.fetchUsers = async (req, res, next) => {
  try {
    await User.find().then(User => {
      if (!User) {
        return res.status(404).json({
          message: "There are no users in the system"
        });
      } else {
        return res.status(200).json({ User });
      }
    });
  } catch (error) {
    return res.status(404).json({ error: "USER NOT FOUND" });
  }
};
// GET/User
// using the user id
exports.fetchUser = async (req, res, next) => {
  try {
    const UserId = req.params.Id;

    if (!req.params.Id) {
      return res.status(403).json({ msg: "invalid url" });
    }
    await User.findById(UserId).then(User => {
      if (!User) {
        return res.status(404).json({
          message: "User does not exist"
        });
      }
      return res.status(200).json({ User });
    });
  } catch (error) {
    if (error === "CastError") console.log(error);
  }
};
// Delete/user
// using the user ID
exports.deleteUser = async (req, res, next) => {
  try {
    const UserId = req.params.Id;
    await User.findByIdAndRemove(UserId).then(User => {
      if (!User) {
        res.status(400).json({
          message: "User does not exist"
        });
      } else {
        return res.status(200).json({
          message: "User deleted sucessfully"
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "GENERIC SERVER ERROR"
    });
  }
};
