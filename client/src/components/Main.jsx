import React, { useEffect, useState } from 'react'
import Post from './Post'
import axios from 'axios'

export default function Main() {
  const [user, setUser] = useState({
    userName: '',
    profilePic: ''
  })
  const [post, setPost] = useState({
    author: '',
    post: '',
    profilePic: ''
  })

  const [feed, setFeed] = useState([])

  
  useEffect(() => {
    
    axios.post('http://localhost:4000/userInfo', {token: localStorage.getItem('token')})
    .then(res => setUser({
      userName: res.data.userName,
      profilePic: res.data.profilePic
    }))
  }, [])
  
  axios.get('http://localhost:4000/post')
    .then(res => setFeed(res.data))
  
  const handlePost = () => {
    axios.post('http://localhost:4000/post', {post})
  }
  

  const displayFeed = 
      feed.map(e => 
        <Post
        author={e.author}
        profilePic={e.profilePic}
        post={e.post}
        />)
    
    
    
  
  return (
    <div className='h-full w-full items-center p-6'>
        <div>
          <div className='w-full px-12 pb-6 flex gap-3 items-center border-blue-500 border-s-2 '>
              <img src={user.profilePic} alt="" className='h-10'/> 
              <div className='flex flex-col w-full'>
                  <input type="text" placeholder='Text here...' className='h-16 outline-none ' onChange={(e) => setPost({author: user.userName, post: e.target.value, profilePic: user.profilePic})}  />
                  <hr className='p-1'/>
                  <button className='border-blue-500 border-2 rounded-md text-blue-500 p-1 w-24 self-end' onClick={() => {handlePost()}}>Post</button>
            </div>
        </div>
          {displayFeed}
        </div>
    </div>
  )
}
