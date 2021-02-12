// import Forum from "../models/forum";

// export const addForum = async (req, res, next) => {
//   try {
//     const { Topic, description, image } = req.body;
//     // await Forum.findOne({ _id: forum._id });
//     // if (Forum) return res.status(403).json({ message: "Forum with this title already exist" });
//     const forum = new Forum({
//       Topic,
//       description,
//       image,
//       author: req.user.name,
//     });
//     await forum.save();
//     return res.status(201).json({ newForum });
//   } catch (error) {
//     return res
//       .status(error.code || 500)
//       .json({ message: error.message, success: false });
//   }
// };

// export const fetchForums = async (req, res, next) => {
//   try {
//     await Forum.find();
//     if (!Forum)
//       return res.status(404).json({ message: "No forum to be loaded" });

//     return res.status(200).json({ Forum });
//   } catch (error) {
//     return res
//       .status(error.code || 500)
//       .json({ message: error.message, success: false });
//   }
// };

// export const fetchForum = async (req, res, next) => {
//   try {
//     const ForumId = req.params.Id;
//     await Forum.findById(ForumId);
//     if (!Forum) return res.status(404).json({ message: "No forum was found" });

//     return res.status(200).jso({ Forum });
//   } catch (error) {
//     return res
//       .status(error.code || 500)
//       .json({ message: error.message, success: false });
//   }
// };

// export const updateForum = async (req, res, next) => {
//   const ForumId = req.params.Id;
//   const forum = await Forum.findByIdAndUpdate(ForumId);
//   if (!forum) return res.status(404), json({ message: "Forum can't be found" });
//   try {
//     forum.save();
//   } catch (error) {
//     return res
//       .status(error.code || 500)
//       .json({ message: error.message, success: false });
//   }
// };
// export const deleteForum = async (req, res, next) => {
//   try {
//     const ForumId = req.params.Id;
//     await Forum.findByIdAndDelete(ForumId);
//     if (!Forum)
//       return res
//         .status(201)
//         .json({ message: "Can' delete please conatct your admin" });
//     return res.status(200).json({ message: "Forum deleted sucessfully" });
//   } catch (error) {
//     return res
//       .status(error.code || 500)
//       .json({ message: error.message, success: false });
//   }
// };
