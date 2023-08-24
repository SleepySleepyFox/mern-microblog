import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'
import io from 'socket.io-client';


// To make live updates -->  https://youtu.be/n9Du-oESxCg

export default function Main() {
  const [user, setUser] = useState({
    userName: '',
    profilePic: ''
  })
  const [post, setPost] = useState({
    author: '',
    post: '',
    profilePic: '',
    liked: false,
  })
  const [feed, setFeed] = useState([])

  
  useEffect(() => {
    axios.post('http://localhost:4000/userInfo', {token: localStorage.getItem('token')})
    .then(res => setUser({
      userName: res.data.userName,
      profilePic: res.data.profilePic
    }))
    
    axios.get('http://localhost:4000/post')
    .then(res => setFeed(res.data))
    
    const socket = io.connect('http://localhost:4000')
    socket.on("Data", (data) => {
      console.log(data)
      setFeed(e => [...e, data.fullDocument])
    })
  }, [])

  // const getPosts = () => {
  //   axios.get('http://localhost:4000/post')
  //     .then(res => setFeed(res.data))    
  // }  
  // getPosts()
  
  const handlePost = () => {
    axios.post('http://localhost:4000/post', {post})
    setPost(
      {
        author: '',
        post: '',
        profilePic: '',
        liked: false 
      }
      )
  }

  const displayFeed = 
      feed.map(e => 
        <Post
        key={e._id}
        author={e.author}
        profilePic={e.profilePic}
        post={e.post}
        likedBy={e.likedBy}
        user ={user.userName}
        id={e._id}
        />)
    
    
    
  
  return (
    <div className='h-full w-screen items-center p-6 overflow-auto'>
        <div>
          <div className='px-12 pb-6 flex gap-3 items-center border-blue-500 border-s-2 '>
              <img src={user.profilePic} alt="" className='h-10'/> 
              <div className='flex flex-col w-full'>
                  <input type="text" placeholder='Text here...' className='h-16 outline-none ' value={post.post}  onChange={(e) => setPost({author: user.userName, post: e.target.value, profilePic: user.profilePic, liked: false})}  />
                  <hr className='p-1'/>
                  <button className='border-blue-500 border-2 rounded-md text-blue-500 p-1 w-24 self-end' onClick={() => {handlePost()}}>Post</button>
            </div>
        </div>
          <div className='flex flex-col-reverse'>
            
            {displayFeed}
            
          </div>
        </div>
    </div>
  )
}
