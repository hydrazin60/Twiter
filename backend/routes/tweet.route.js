import express from "express"
import { createTweet, deleteTweet } from "../controllers/tweet.controller.js";
import isAuthentication from "../config/auth.js"
const  TweetRoute = express.Router();

TweetRoute.route("/create").post(  isAuthentication , createTweet)
TweetRoute.route("/tweetdelete/:id").delete(  isAuthentication , deleteTweet )

export default  TweetRoute ;