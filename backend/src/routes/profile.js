import express from "express";
import auths from "../middleware/auth";

const profile_api = express.Router();

profile_api.get("/api/v1//profile");
profile_api.get("/api/v1//profile/:id");
profile_api.patch("/api/v1//profile/:id");
profile_api.delete("/api/v1//profile/:id");

export default profile_api;
