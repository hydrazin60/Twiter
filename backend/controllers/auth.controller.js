import User from "../models/User.Model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const SignUp = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required!",
        success: false,
      });
    }
    const RegisterUser = await User.findOne({ email });
    if (RegisterUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      message: "SignUp successfully",
      success: true,
      data: newUser,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};
// login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const RegisterUser = await User.findOne({ email });
    if (!RegisterUser) {
      return res.status(404).json({
        message: "User does not exist",
        success: false,
      });
    }
    const ValidPassword = await bcryptjs.compare(
      password,
      RegisterUser.password
    );
    if (!ValidPassword) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const tokenData = {
      userId: RegisterUser._id,
    };
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "360d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 360 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: `Welcome ${RegisterUser.name} you are successfully login `,
        success: true,
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Server Error",
      success: false,
    });
  }
};

// logout

export const Logout = (req, res) => {
  return res.cookie("token", "", { expires: new Date(Date.now()) }).json({
    message: "Logged out successfully",
    success: true,
  });
};
// bookmark
export const Bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const user = await User.findById(loggedInUserId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    if (user.bookmarks.includes(tweetId)) {
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Removed from bookmarks",
        success: true,
      });
    } else {
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Saved to bookmarks",
        success: true,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      success: false,
      error: error.message,
    });
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        error: "User ID is required",
        success: false,
      });
    }
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(404).json({
        error: "User not found",
        success: false,
      });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "An error occurred while retrieving the user profile" });
  }
};
//
// export const MutualFriend = async (req, res) => {
//   try {
//     console.log("Request params:", req.params);
//     const { id } = req.params;
//     console.log("Received id:", id);
//     if (!id) {
//       return res.status(400).json({
//         message: "User ID is required",
//         success: false,
//       });
//     }
//     const otherUsers = await User.find({ _id: { $ne: id } }).select(
//       "-password"
//     );
//     if (!otherUsers || otherUsers.length === 0) {
//       return res.status(404).json({
//         message: "Currently do not have any users.",
//         success: false,
//       });
//     }
//     return res.status(200).json({
//       otherUsers,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "An error occurred while retrieving users",
//       success: false,
//     });
//   }
// };

export const MutualFriend = async (req, res) => {
  try {
    const { otherUserId } = req.params;
    console.log("Received otherUserId:", otherUserId);
    if (!otherUserId) {
      return res.status(400).json({
        message: "User ID is required",
        success: false,
      });
    }
    const otherUsers = await User.find({ _id: { $ne: otherUserId } }).select(
      "-password"
    );
    if (!otherUsers || otherUsers.length === 0) {
      return res.status(404).json({
        message: "Currently do not have any users.",
        success: false,
      });
    }
    return res.status(200).json({
      otherUsers,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while retrieving users",
      success: false,
    });
  }
};

export const FollowORUnfollow = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const userId = req.params.id;

    const loggedInUser = await User.findById(loggedInUserId);
    const user = await User.findById(userId);

    if (!loggedInUser || !user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    if (user.followers.includes(loggedInUserId)) {
      // Unfollow
      await user.updateOne({ $pull: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $pull: { following: userId } });
      return res.status(200).json({
        message: "User unfollowed successfully",
        success: true,
      });
    } else {
      // Follow
      await user.updateOne({ $push: { followers: loggedInUserId } });
      await loggedInUser.updateOne({ $push: { following: userId } });
      return res.status(200).json({
        message: "User followed successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while updating follow status",
      success: false,
    });
  }
};
