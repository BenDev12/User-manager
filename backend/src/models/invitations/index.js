import mongoose from "mongoose";

const Schema = mongoose.Schema;

const InvitationSchema = new Schema({
  to: {
    type: String,
    required: true,
  },
  invited_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  user: {
    type: String,
  },
  invitation_token: {
    type: String,
    required: true,
  },
  invited_on: {
    type: Date,
    default: Date.now(),
  },
  accepted: {
    type: String,
    default: false,
  },
  status: {
    type: String,
    default: "Pending",
  },
});
const Invitation = mongoose.model("invitation", InvitationSchema);
export default Invitation;
