const mongoose = require("mongoose");


// Tags Mongoose => Post and Tags are in a many to many relationship
const tagSchema = new mongoose.Schema({
    name: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true,
});

// const Tag = mongoose.model("tag", tagSchema); // tags collection
module.exports = mongoose.model("tag", tagSchema); // tags collection
