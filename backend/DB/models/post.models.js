import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    postTitle: {
      type: String,
      required: true,
      maxlength: 100,
    },
    postPhoto: {
      type: [String],
      required: true,
      validater: function (photos) {
        return photos.every((photo) => /^https?:\/\//.test(photo));
      },
      message: "Invalid photo URL",
    },
    postDescription: {
      type: String,
      required: true,
    },
    postLike: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    postComment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
      },
    ],
    TagPost: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);
const PostModel = mongoose.model("Post", postSchema);
export default PostModel;
