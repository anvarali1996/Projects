import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title: String,
    slug: String,
    content: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    }]
});

const Post = mongoose.model('Post', userSchema);

export default Post;