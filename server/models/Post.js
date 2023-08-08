const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const Post = new mongoose.Schema({
    author: {type: String, required: true, unique: false},
    post: {type: String, required: true},
    profilePic: {type: String, required: true}
}, {timestamps: true})

const model = mongoose.model("Post", Post)

module.exports = model