const mongoose = require("mongoose");


//  Post Mongoose
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user_id: { // mongo_id for a document in the users collection
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    tag_ids: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tag",
            required: true,
        },
    ],
}, {
    versionKey: false,
    timestamps: true,
});

// const Post = mongoose.model("post", postSchema); // post collection
module.exports = mongoose.model("post", postSchema); // post collection
