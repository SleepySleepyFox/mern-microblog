const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const User = require('./models/User')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://admin:${process.env.KEY}@cluster0.och0jtq.mongodb.net/mern-blog`)

app.get('/', (req, res) => {
    res.send('works')
})

app.post('/auth', async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})
    if(!user){
        console.log('Error user not fountd')
    }else{
        if(user.password === password){
            console.log('OK')
            const token = jwt.sign({userId: user._id}, 'dasjhkfsd')
            res.json(token)
        }else{
            console.log('Invalid password')
        }
    }
})

app.post('/register', async (req, res) => {
    
    try{
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            profilePic: req.body.pfp
        })
        const token = jwt.sign({userId: user._id}, 'dasjhkfsd')
        res.json(token)
    }catch(err){
        console.log(err)
    }
})

app.listen(4000)