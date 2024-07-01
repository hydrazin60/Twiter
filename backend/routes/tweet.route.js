import express from "express";
import {
  OnlyFollowingTweets,
  createTweet,
  deleteTweet,
  getAllTweets,
  likeAndDislike,
} from "../controllers/tweet.controller.js";
import isAuthentication from "../config/auth.js";

const TweetRoute = express.Router();

TweetRoute.route("/create").post(isAuthentication, createTweet);
TweetRoute.route("/tweetdelete/:id").delete(isAuthentication, deleteTweet);
TweetRoute.route("/like/:id").put(isAuthentication, likeAndDislike);
TweetRoute.route("/showtweet/:id").get(isAuthentication, getAllTweets);
TweetRoute.route("/showfollowingusertweet/:id").get(
  isAuthentication,
  OnlyFollowingTweets
);
export default TweetRoute;
