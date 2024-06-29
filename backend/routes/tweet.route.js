import express from "express";
import {
  createTweet,
  deleteTweet,
  likeAndDislike,
} from "../controllers/tweet.controller.js";
import isAuthentication from "../config/auth.js";

const TweetRoute = express.Router();

TweetRoute.route("/create").post(isAuthentication, createTweet);
TweetRoute.route("/tweetdelete/:id").delete(isAuthentication, deleteTweet);
TweetRoute.route("/like/:id").put(isAuthentication, likeAndDislike);

export default TweetRoute;






 