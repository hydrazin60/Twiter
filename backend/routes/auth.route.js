import express from "express";
import { Login, Logout, SignUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(SignUp);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
export default router;
