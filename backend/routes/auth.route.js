import express from "express";
import {
  Bookmark,
  Login,
  Logout,
  MutualFriend,
  SignUp,
  getMyProfile,
} from "../controllers/auth.controller.js";
import isAuthentication from "../config/auth.js";

const router = express.Router();

router.route("/register").post(SignUp);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAuthentication, Bookmark);
router.route("/profile/:id").get(isAuthentication, getMyProfile);
// router.route("/mutualfriend/:id").get(isAuthentication, MutualFriend);
router.route("/mutualfriend/:otherUserId").get(isAuthentication, MutualFriend);
export default router;
