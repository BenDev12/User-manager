import jwt from "jsonwebtoken";
import config from "../config/";

const auths = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader)
    return res.status(403).json({ message: "not authenticated" });
  try {
    const token = req.get("Authorization").split(" ")[1];
    if (token == null)
      return res.status(401).json({ message: "UnAuthorised", success: false });
    const user = await jwt.verify(token, config.jwt_secret);
    if (!user)
      return res.status(403).json({ message: "You are not authorized" });
    req.user = user;
    // console.log(req.user);
    return next();
  } catch (error) {
    console.log(error);
  }

  // const error = new Error();
  // error.status = 403;
};
export default auths;
