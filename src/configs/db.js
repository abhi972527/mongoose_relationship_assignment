const mongoose = require("mongoose");


// step - 1
// const connect = () => {
module.exports = () => {
    // return mongoose.connect("mongodb+srv://Abhi1996:Abhi1996@cluster0.l4oyp.mongodb.net/test")
    return mongoose.connect("mongodb://127.0.0.1:27017")
};