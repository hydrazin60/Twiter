import express from "express"
import { createTweet } from "../controllers/tweet.controller.js";
import isAuthentication from "../config/auth.js"
const  TweetRoute = express.Router();

TweetRoute.route("/create").post(  isAuthentication , createTweet)

export default  TweetRoute ;