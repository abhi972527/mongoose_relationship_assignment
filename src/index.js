const express = require("express");
// const mongoose = require("mongoose");

//  // const connect = require("./configs/db");

// const user = require("./users.json");   // Not required

// 1 - connest to mongodb server
// 2 - create a schema for our data
// 3 - create a model from the schema

// // step - 1
// const connect = () => {
//     // return mongoose.connect("mongodb+srv://Abhi1996:Abhi1996@cluster0.l4oyp.mongodb.net/test")
//     return mongoose.connect("mongodb://127.0.0.1:27017")
// };

// // step - 2
// //  Users Mongoose
// const userSchema = new mongoose.Schema({
//     first_name: { type: String, required: true },
//     last_name: { type: String, required: false },
//     email: { type: String, required: true, unique: true },
//     gender: { type: String, required: false, default: "Male" },
//     age: { type: Number, required: true },
// }, {
//     versionKey: false,
//     timestamps: true,
// });


// // step - 3
// const User = mongoose.model("user", userSchema); // users

//  // const User = require("./models/user.model");


// //  Post Mongoose
// const postSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     body: { type: String, required: true },
//     user_id: { // mongo_id for a document in the users collection
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "user",
//         required: true,
//     },
//     tag_ids: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "tag",
//             required: true,
//         },
//     ],
// }, {
//     versionKey: false,
//     timestamps: true,
// });

// const Post = mongoose.model("post", postSchema); // post collection

//  // const Post = require("./models/post.model");



// // Comment Mongoose => Post and comment are one to many relationship
// const commentSchema = new mongoose.Schema({
//     body: { type: String, required: true },
//     user_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "user",
//         required: true,
//     },
//     post_id: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "post",
//         required: true,
//     },
// }, {
//     versionKey: false,
//     timestamps: true,
// });

// const Comment = mongoose.model("comment", commentSchema); // comments collection

//  // const Comments = require("./models/comment.model")



// // Tags Mongoose => Post and Tags are in a many to many relationship
// const tagSchema = new mongoose.Schema({
//     name: { type: String, required: true }
// }, {
//     versionKey: false,
//     timestamps: true,
// });

// const Tag = mongoose.model("tag", tagSchema); // tags collection

//  // const Tag = require("./models/tag.model")


const app = express();

app.use(express.json());


// users
// post = /users
// get all = /users
// get one = /user/:id
// update one = /users/:id
// delete one = /users/:id


// // USERS CRUD
// app.post("/users", async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         return res.status(201).send(user);
//     } catch (e) {
//         // Exception
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.get("/users", async (req, res) => {
//     // thennable
//     try {
//         const users = await User.find().lean().exec();
//         // const users = await User.find({email: "a@a.com"}).lean().exec();
//         return res.send({ users });
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });

// app.get("/users/:id", async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id).lean().exec();
//         return res.send({ user });
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// })


// app.patch("/users/:id", async (req, res) => {
//     try {
//         // fetched --> updated - don't fetch
//         // fetched --> updated - fetch
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
//         return res.status(201).send(user);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }

//     // return res.json({ user });
// })


// app.delete("/users/:id", async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id).lean().exec();
//         res.status(200).send(user);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// })


const usersController = require("./controllers/users.controller");




// //  ------------------- TAGS CRUD ------------------

// app.post("/tags", async (req, res) => {
//     try {
//         const tag = await Tag.create(req.body);
//         return res.status(201).send(tag);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.get("/tags", async (req, res) => {
//     try {
//         const tags = await Tag.find().lean().exec();
//         return res.send(tags);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.get("/tags/:id", async (req, res) => {
//     try {
//         const tag = await Tag.findById(req.params.id).lean().exec();
//         return res.send(tag);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.patch("/tags/:id", async (req, res) => {
//     try {
//         const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
//         return res.status(200).send(tag)
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.delete("/tags/:id", async (req, res) => {
//     try {
//         const tag = await Tag.findByIdAndDelete(req.params.id).lean().exec();
//         return res.status(200).send(tag);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.get("/tags/:id/posts", async (req, res) => {
//     try {
//         const tag = await Tag.findById(req.params.id).lean().exec();
//         const posts = await Post.find({ tag_ids: tag._id }).populate("tag_ids").lean().exec();
//         return res.status(200).send({ posts, tag });
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


const tagsController = require("./controllers/tags.controller");





// //  ------------------- POSTS CRUD ------------------

// app.post("/posts", async (req, res) => {
//     try {
//         const post = await Post.create(req.body);
//         return res.status(201).send(post);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.get("/posts", async (req, res) => {
//     try {
//         const post = await Post.find().populate({ path: "user_id", select: "first_name" }).populate({ path: "tag_ids", select: "name" }).lean().exec();
//         // const post = await Post.find().populate("user_id").populate("tag_ids").lean().exec();
//         return res.send(post);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.get("/posts/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id).lean().exec();
//         return res.send(post);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.patch("/posts/:id", async (req, res) => {
//     try {
//         const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
//         return res.send(post);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });

// app.delete("/posts/:id", async (req, res) => {
//     try {
//         const post = await Post.findByIdAndDelete(req.params.id).lean().exec();
//         return res.send(post);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


const postsController = require("./controllers/posts.controller");




// //  ------------------- COMMENTS CRUD ------------------

// app.post("/comments", async (req, res) => {
//     try {
//         const comment = await Comment.create(req.body);
//         return res.status(201).send(comment);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.get("/comments", async (req, res) => {
//     try {
//         const comment = await Comment.find().lean().exec();
//         return res.send(comment);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.get("/comments/:id", async (req, res) => {
//     try {
//         const comment = await Comment.findById(req.params.id).lean().exec();
//         return res.send(comment);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


// app.patch("/comments/:id", async (req, res) => {
//     try {
//         const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
//         return res.send(comment);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });

// app.delete("/comments/:id", async (req, res) => {
//     try {
//         const comment = await Comment.findByIdAndDelete(req.params.id).lean().exec();
//         return res.send(comment);
//     } catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" });
//     }
// });


const commentsController = require("./controllers/comments.controller");


app.use("/posts", postsController);
app.use("/comments", commentsController);
app.use("/users", usersController);
app.use("/tags", tagsController);





// app.listen(2345, async function () {
//     await connect();
//     console.log("listening on port 2345");
// });



module.exports = app;