import Tweet from "../models/Tweet.Model.js";
import User from "../models/User.Model.js";

// Create a new tweet
export const createTweet = async (req, res) => {
  try {
    const { description, id, images } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newTweet = await Tweet.create({
      description,
      userId: id,
      images: images || [],
    });

    res.status(201).json({
      message: "Tweet created successfully",
      success: true,
      tweet: newTweet,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

//  delete tweet

export const deleteTweet = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTweet = await Tweet.findByIdAndDelete(id);

    if (!deletedTweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Tweet deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error(error); //
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

/*   import Tweet from "../models/Tweet.Model.js";
import User from "../models/User.Model.js";

// Create a new tweet
export const createTweet = async (req, res) => {
  try {
    const { description, id, images } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newTweet = await Tweet.create({
      description,
      userId: id,
      images: images || [],
    });

    res.status(201).json({
      message: "Tweet created successfully",
      success: true,
      tweet: newTweet,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

// Like a tweet
export const likeTweet = async (req, res) => {
  try {
    const { tweetId, userId } = req.body;
    if (!tweetId || !userId) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }

    if (!tweet.likes.includes(userId)) {
      tweet.likes.push(userId);
      await tweet.save();
      res.status(200).json({
        message: "Tweet liked successfully",
        success: true,
      });
    } else {
      res.status(400).json({
        message: "Tweet already liked",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

// Retweet a tweet
export const retweet = async (req, res) => {
  try {
    const { tweetId, userId } = req.body;
    if (!tweetId || !userId) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }

    if (!tweet.retweets.includes(userId)) {
      tweet.retweets.push(userId);
      await tweet.save();
      res.status(200).json({
        message: "Tweet retweeted successfully",
        success: true,
      });
    } else {
      res.status(400).json({
        message: "Tweet already retweeted",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

// Reply to a tweet
export const replyToTweet = async (req, res) => {
  try {
    const { tweetId, userId, description } = req.body;
    if (!tweetId || !userId || !description) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }

    const replyTweet = await Tweet.create({
      description,
      userId,
      replies: [],
    });

    tweet.replies.push(replyTweet._id);
    await tweet.save();

    res.status(201).json({
      message: "Replied to tweet successfully",
      success: true,
      reply: replyTweet,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
  */
