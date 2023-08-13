import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    userName: String,
    handle: String,
    image: String,
    tuit: String,
    title: String,
    topic: String,
    time: String,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    likes: Number,
    liked: Boolean,
  },
  { collection: "tuits" }
);
export default schema;