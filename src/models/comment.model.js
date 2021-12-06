const mongoose = require("mongoose");


// Comment Mongoose => Post and comment are one to many relationship
const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});

// const Comment = mongoose.model("comment", commentSchema); // comments collection
module.exports = mongoose.model("comment", commentSchema); // comments collection
