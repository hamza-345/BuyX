import express from "express";
import { authUser, addUser, userProfile } from "../controllers/userController.js";
import { protect } from "../utils/protect.js";

const Router = express.Router();

Router.route("/").post(addUser)
Router.route("/login").get(authUser);
Router.route("/profile").get(protect, userProfile)

export default Router;
