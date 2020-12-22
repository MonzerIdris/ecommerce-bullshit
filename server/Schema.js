const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");


const User = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})


const model = mongoose.model("user",User)

module.exports = model


