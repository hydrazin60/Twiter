import express from "express";
import { SignUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/register").post(SignUp);

export default router;
