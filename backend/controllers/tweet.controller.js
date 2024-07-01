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

// LikeORDISLIKE

export const likeAndDislike = async (req, res) => {
  try {
    const LoggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({
        message: "Tweet not found",
        success: false,
      });
    }

    if (tweet.likes.includes(LoggedInUserId)) {
      await Tweet.findByIdAndUpdate(
        tweetId,
        { $pull: { likes: LoggedInUserId } },
        { new: true }
      );
      return res.status(200).json({
        message: "Disliked the tweet",
        success: true,
      });
    } else {
      await Tweet.findByIdAndUpdate(
        tweetId,
        { $push: { likes: LoggedInUserId } },
        { new: true }
      );
      return res.status(200).json({
        message: "Liked the tweet",
        success: true,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

// export const getAllTweets = async(req ,res)=>{
//    try{
//     const id =req.params.id;
//     const loggedUser = await findById(id)
//     const loggedInuserTweet = await Tweet.find({_id :id})
//     const followingUserTweet = await Promise.all(loggedUser.following.map((otherUsersId)=>{
//       return  Tweet.find({userId : otherUsersId})
//     }))
//     return res.status(200).json({
//       tweets : loggedInuserTweet.concat(...followingUserTweet)
//     })
//    }catch(error){
//     console.log(error);
//    }
// }

export const getAllTweets = async (req, res) => {
  try {
    const id = req.params.id;
    const loggedUser = await User.findById(id);
    if (!loggedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    const loggedInUserTweets = await Tweet.find({ userId: id });
    const followingUserTweets = await Promise.all(
      loggedUser.following.map((otherUserId) => {
        return Tweet.find({ userId: otherUserId });
      })
    );
    const allTweets = loggedInUserTweets.concat(...followingUserTweets);
    return res.status(200).json({
      tweets: allTweets,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while retrieving tweets",
      success: false,
    });
  }
};

export const OnlyFollowingTweets = async (req, res) => {
  try {
    const id = req.params.id;

    const loggedInUser = await User.findById(id);
    if (!loggedInUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    const followingUserTweets = await Tweet.find({
      userId: { $in: loggedInUser.following },
    });
    return res.status(200).json({
      tweets: followingUserTweets,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while retrieving tweets",
      success: false,
    });
  }
};
