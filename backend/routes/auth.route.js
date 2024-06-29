import express from "express";
import { Bookmark, Login, Logout, SignUp  } from "../controllers/auth.controller.js";
import isAuthentication from "../config/auth.js";

const router = express.Router();

router.route("/register").post(SignUp);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthentication, Bookmark);  

export default router;
