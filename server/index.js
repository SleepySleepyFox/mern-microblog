const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const User = require('./models/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://admin:${process.env.KEY}@cluster0.och0jtq.mongodb.net/mern-blog`)

app.get('/', (req, res) => {
    res.send('works')
})

// app.get('/profile', (req, res))

app.post('/register', async (req, res) => {
    
    try{
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            profilePic: req.body.pfp
        })
        console.log(user)
    }catch(err){
        console.log(err)
    }
})

app.listen(4000)