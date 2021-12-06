const express = require("express");

const User = require("../models/user.model");

const router = express.Router();


// USERS CRUD
router.post("", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (e) {
        // Exception
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("", async (req, res) => {
    // thennable
    try {
        const users = await User.find().lean().exec();
        // const users = await User.find({email: "a@a.com"}).lean().exec();
        return res.send({ users });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.send({ user });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})


router.patch("/:id", async (req, res) => {
    try {
        // fetched --> updated - don't fetch
        // fetched --> updated - fetch
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        return res.status(201).send(user);
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }

    // return res.json({ user });
})


router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        res.status(200).send(user);
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})


module.exports = router;