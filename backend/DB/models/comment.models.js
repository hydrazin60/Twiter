import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    commentText: {
      type: String,
      maxlength: 100,
    },
    commentImogy: {
      type: String,
      default: "",
    },
    CommentImage: {
      type: String,
      default: "",
    },
    commentLike: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    commentWritter: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User id is required"],
      },
    ],
    postId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: [true, "Post id is required"],
      },
    ],
  },

  {
    timestamps: true,
  }
);
const commentModel = mongoose.model("Comment", commentSchema);
export default commentModel;
