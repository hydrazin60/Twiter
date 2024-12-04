import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      match: [/.+@.+\..+/, "Please enter a valid email address"],
      validator: function () {
        return !(this.email && this.phoneNumber);
      },
      message:
        "Please provide either an email or a mobile number, but not both.",
    },
    phoneNumber: {
      type: String,
      unique: [true, "Phone number already exists"],
      validator: function () {
        return !(this.email && this.phoneNumber);
      },
      message:
        "Please provide either an email or a mobile number, but not both.",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    coverPic: {
      type: String,
      default: "",
    },
    aboutUs: {
      type: String,
      default: "",
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    likePost: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    rePost: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    tagedByOther: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ],
    varificationToken: {
      type: String,
      default: "",
    },
    isemailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
