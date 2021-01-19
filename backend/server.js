const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require("./middleware/auth");

const PORT = process.env.PORT || 4000;

const Admin = require("./routes/Admin");
const Social = require("./routes/Social");
const Project = require("./routes/Project");
const db = require("./config/config");

app.use(bodyParser.json());
app.use(cors());

app.use(Admin);
app.use(Social);
app.use(Project);
app.use("/protected", auth, (req, res) => {
  res.send(`Hi ${req.user.firstName} your are Authenticated!`);
});
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: { message: err.message } });
});

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
