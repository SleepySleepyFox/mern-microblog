import React, { useState, useEffect } from 'react'
import Post from './Post'
import axios from 'axios'

export default function Profile() {

  const [user, setUser] = useState({
    userName: '',
    profilePic: ''
  })

  const [feed, setFeed] = useState([])

  
  useEffect(() => { 
    axios.post('http://localhost:4000/userInfo', {token: localStorage.getItem('token')})
    .then(res => {
      setUser({
        userName: res.data.userName,
        profilePic: res.data.profilePic
      })
      setFeed(res.data.posts)
    })
    
  }, [])

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
          <div className='w-full px-12 pb-6 flex flex-col gap-1 items-center border-blue-500 border-s-2 '>
              <img src={user.profilePic} alt="" className='h-10'/> 
              <h1 className='text-2xl p-0 m-0'>{user.userName}</h1>
        </div>
            {displayFeed}
        </div>

    </div>
  )
}
