import mongoose from "mongoose";
import randomstring from "randomstring";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  identifier: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    default: null,
  },
  boi: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  avarta: {
    type: String,
    default: null,
  },
  password: {
    type: String,
  },
  joined_at: {
    type: Date,
    default: Date.now,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
profileSchema.methods.generateIdentifier = async function () {
  const profile = this;
  profile.identifier = randomstring.generate({
    length: 16,
    charset: "numeric",
  });
  return profile.identifier;
};

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
