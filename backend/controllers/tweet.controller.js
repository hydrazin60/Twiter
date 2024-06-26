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
