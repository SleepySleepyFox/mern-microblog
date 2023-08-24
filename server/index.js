const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const User = require('./models/User')
const jwt = require('jsonwebtoken')
const Post = require('./models/Post')
const { ObjectId } = require('mongodb')

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

app.post('/userInfo', (req, res) => {
    jwt.verify(req.body.token, 'dasjhkfsd', async (err, decodedToken) => {
        if(err){
            console.log(err.message)
        }
        else{
            const user = await User.findById(decodedToken.userId)
            const posts = await Post.find({'author': user.username})
            res.send(
                {
                    profilePic: user.profilePic, 
                    userName: user.username,
                    posts: posts
                })
        }
    })
})

app.post('/post', async (req, res) => {
    try{   
        await Post.create({
            author: req.body.post.author,
            post: req.body.post.post,
            profilePic: req.body.post.profilePic,
            liked: req.body.post.liked
        })

    }catch(err){
        console.log(err)
    }
})

    app.get('/post', (req, res) => {
        Post.find({}).then((posts) => {
        res.send(posts)
        })
    })


app.post('/likeUpdate', (req, res) => {

    Post.find({_id: `${req.body.id}`}).then(post => {
        post.filter((field) => 
            field.likedBy.includes(req.body.userName) ? 
            Post.findByIdAndUpdate(req.body.id, {$pull: {likedBy: req.body.userName}})
                .then(doc => res.send(doc))
            : Post.findByIdAndUpdate(req.body.id, {$push: {likedBy: req.body.userName}})
                .then(doc => res.send(doc))
            )
    })
    
})

const server = app.listen(4000)

const io = require("socket.io")(server, {
    cors: {
        origin: "*"
    }
})

io.on('connect', socket => {
    const postsConection = Post.watch()
    postsConection.once('change', data => {
        socket.emit('Data', data)
    })
})
