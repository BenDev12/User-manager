import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import auths from "./middleware/auth";
import AdminRouter from "./routes/Admin";
import Social from "./routes/Social";
import ProjectRouter from "./routes/Project";
import db from "./db";

import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 4000;

const io = new Server(server, {
  // ...
});

io.on("connection", (socket) => {
  console.log(socket.id);
});

app.use(bodyParser.json());
app.use(cors());

app.use(AdminRouter);
app.use(Social);
app.use(ProjectRouter);
app.use("/protected", auths, (req, res) => {
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

server.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
