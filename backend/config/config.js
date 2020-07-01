const mongoose = require("mongoose");

const MONGODB_URL = "mongodb://localhost/userRepo";

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("Database connection established sucessfully");
});

module.exports = mongoose;
