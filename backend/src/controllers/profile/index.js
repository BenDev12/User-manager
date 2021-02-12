import User from "../../models/index";
import UserLoader from "../../middleware/userLoader";

export const getProfile = async (req, res, next) => {
  const user = req.user;
  try {
    const profile = await User.findOne({ email: user.email });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: "Internal server error",
    });
  }
};

export const updateProfile = async (req, res, next) => {
  const data = req.body;
  try {
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: "Internal server error",
    });
  }
};

export const deleteProfile = async (req, res, next) => {
  const id = req.params;
  try {
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: "Internal server error",
    });
  }
};
