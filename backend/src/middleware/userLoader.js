import User from "../models/index";

const userLoader = async (req, res, next) => {
  console.log(req.body);
  try {
    var user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json({ message: "User Not Found" });
    req.user = user;
    console.log("user");
    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
export default userLoader;
