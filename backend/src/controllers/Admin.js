// import { response } from "express";
import User from "../models/index";
import Inviation from "../models/invitations";
import Email_service from "../providers/email/email_provider";
import VarificationCode from "../utils/code";
import randomstring from "randomstring";

// POST/signup
// signup with firstName,lastName,email,password

export const signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, username, password } = req.body;

    const user = await User.findOne({ email: email } || { username: username });

    if (user)
      return res.status(409).json({
        message: "User with this email already exist",
      });
    // if (user.username)
    //   return res.status(409).json({
    //     message: "Username  already exist",
    //   });
    const token = await VarificationCode();

    const user_obj = new User({
      firstName,
      lastName,
      email,
      username,
      password,
      varification_code: token,
    });
    await user_obj.generateUid();
    await user_obj.save();
    await user_obj.createProfile(email);
    await Email_service.send_mail({
      attributes: {
        user_email: email,
        user_name: lastName,
      },
      template_id: "welcome",
    });
    console.log(`welcome email sent`);
    return res.status(200).json({ token, data: user_obj });
  } catch (error) {
    console.log(error);
    error.status = 400;
    next(error);
  }
};

// POST/login
// login with email and password.

export const login = async (req, res, next) => {
  const { password, email, username } = req.body;
  if (!req.body)
    return res.status(403).json({
      status: 0,
      success: false,
      message: "Must provide user credentials",
    });
  const user = await User.findOne({ email: email } || { username: username });
  if (!user)
    return res.status(404).json({
      status: 0,
      success: false,
      message: "User not found",
    });
  try {
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });
    const authToken = await user.getSignedToken(user);
    const refreshToken = await user.getRefreshToken(user);
    // await refreshTokens.push(refreshToken);
    return res.status(200).json({
      status: 200,
      // data: user,
      authToken,
      refreshToken,
      messagae: "Sucessfully logged in",
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({ error: error });
    // error.status = 400;
    // next(error);
  }
};
// POST/AddUser

export const addUser = async (req, res, next) => {
  // const { role } = req.user;
  const role = "admin";
  if (role !== "admin")
    return res.status(403).json({
      message: "You are FORBIDEN request for more previllage from Admin",
    });
  try {
    const { email } = req.body;
    const exist = await Inviation.findOne({ to: email });
    if (exist)
      return res.status(400).json({
        status: 400,
        message: "User already invited",
      });
    const token = randomstring.generate({
      length: 16,
      charset: "numeric",
    });
    const invitation = new Inviation({
      to: email,
      invited_by: req.user.id,
      user: req.user.name,
      invitation_token: token,
    });
    await invitation.save();
    await Email_service.send_mail({
      attributes: {
        user_email: email,
        // user_name: lastName,
      },
      template_id: "welcome",
    });
    return res.status(200).json({
      status: 200,
      message: `Invitation to ${email} has been sent sucessfully`,
    });
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

// GET/Users

export const fetchUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users)
      return res.status(404).json({
        status: 404,
        success: false,
        messagae: "User Not found",
      });
    return res.status(200).json({
      status: 200,
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: "Internal Server error",
    });
  }
};
// GET/User
// using the user id
export const fetchUser = async (req, res, next) => {
  const UserId = req.params.Id;
  try {
    const user = await User.findOne(UserId);
    if (!user) {
      return res.status(404).json({
        message: "User does not exist",
      });
    }
    return res.status(200).json({
      status: 200,
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: "Internal Server error",
    });
  }
};
// Delete/user
// using the user ID
export const deleteUser = async (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin")
    return res.status(403).json({
      message: "You are FORBIDEN",
    });
  try {
    const UserId = req.params.Id;
    const user = await User.findOne(UserId);
    if (!user) {
      res.status(400).json({
        message: "User does not exist",
      });
    }
    await user.updateOne({ isDlelete: true });
    await user.deactivateProfile();
    return res.status(200).json({
      message: "User deleted sucessfully",
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: message.error,
    });
  }
};
export const protect = async (req, res, next) => {
  try {
    console.log("hello");
  } catch (error) {}
};
