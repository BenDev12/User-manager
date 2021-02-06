import { config } from "dotenv";
config();

export default {
  // url: process.env.APP_URL || "http://localhost:3000/api/v1",
  // port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || "development",

  databaseUrl: {
    development:
      process.env.DEVELOPMENT_DATABASE_URL || "mongodb://localhost/userapp",
    production:
      process.env.PRODUCTION_DATABASE_URL ||
      "mongodb://localhost:27017/thedb_production",
    test: process.env.TEST_DATABASE_URL || "mongodb://localhost:27017/db-test",
    staging:
      process.env.STAGING_DATABASE_URL ||
      "mongodb://localhost:27017/thedb_stagine",
  },
  jwt_secret: process.env.JWT_SECRETE || "mygoodersupersecrettoken",
  refresh_secret: process.env.REFRESH_TOKEN_SECRET || "thisismysuperrefresh",
};
