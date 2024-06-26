import express from "express";
import { Login, SignUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(SignUp);
router.route("/login").post(Login)
export default router;
