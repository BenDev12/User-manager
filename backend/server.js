const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const Admin = require("./routes/Admin");
const db = require("./config/config");

app.use(bodyParser.json());
app.use(cors());

app.use(Admin);

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
