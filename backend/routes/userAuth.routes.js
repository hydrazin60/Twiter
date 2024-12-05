import express from "express";
import {
  emailVerification,
  Login,
  Register,
} from "../controllers/Auth/auth.controller.js";
const authRouter = express.Router();
authRouter.post("/register", Register);
authRouter.get("/verify/:token", emailVerification);
authRouter.post("/login", Login);
export default authRouter;
