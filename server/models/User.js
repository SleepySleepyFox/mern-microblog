const { Binary } = require('mongodb')
const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    profilePic: {type: String, required: true}
})

const model = mongoose.model("User", User)

module.exports = model