import config from "../config";
import mongoose from "mongoose";
class Database {
  constructor() {
    this.dbConnect();
  }

  dbConnect() {
    mongoose
      .connect(config.databaseUrl[config.environment], {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch(() => {
        console.error("Database connection error");
      });
  }
}

export default new Database();
