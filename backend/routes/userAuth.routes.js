import express from "express";
import {
  emailVerification,
  Register,
} from "../controllers/Auth/auth.controller.js";
const authRouter = express.Router();
authRouter.post("/register", Register);
authRouter.get("/verify/:token", emailVerification);

export default authRouter;
