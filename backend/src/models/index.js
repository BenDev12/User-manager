import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config";
import Profile from "./profile";
import randomstring from "randomstring";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  uid: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  isVarified: {
    type: Boolean,
    default: false,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },
  varification_code: { type: String },
  role: { type: String, default: "member" },
  password: {
    type: String,
    minlength: 6,
    trim: true,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});
UserSchema.methods.generateUid = async function () {
  const user = this;
  user.uid = randomstring.generate({
    length: 16,
    charset: "numeric",
  });
  return user.uid;
};

UserSchema.methods.comparePassword = async function (password) {
  // console.log(password);
  return bcrypt.compare(password, this.password).then((isMatch) => {
    if (isMatch) return isMatch;
  });
};

UserSchema.methods.createProfile = async function (email) {
  const user = this;
  var profile = new Profile({ email: email, user_id: user.uid });
  await profile.generateIdentifier();
  await profile.save();
  return profile;
};
UserSchema.methods.getProfile = async function () {
  const user = this;
  var profile = await Profile.findOne({});
};
UserSchema.methods.removeProfile = async function () {
  const user = this;
  const payload = { email: email, user_id: user.uid };
  var profile = await Profile.findOne(payload);
  if (!profile) return { Error: "Profile does not exist" };
  await Profile.deleteOne(payload);
};
UserSchema.methods.getSignedToken = () => {
  console.log(user.firstName);
  console.log(user.email);
  return jwt.sign(
    {
      id: this.username,
      email: this.email,
      name: this.firstName,
      role: this.role,
    },
    config.jwt_secret,
    { expiresIn: "1hr" }
  );
};

UserSchema.methods.getRefreshToken = () => {
  console.log(user.email);
  return jwt.sign(
    {
      id: this.username,
      email: this.email,
      name: this.firstName,
      role: this.role,
    },
    config.refresh_secret,
    { expiresIn: "1hr" }
  );
};
const User = mongoose.model("User", UserSchema);
export default User;
