const mongoose = require("mongoose");

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
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
  },

  password: {
    type: String,
    minlength: 6,
    trim: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
