import React, { useState, useEffect } from 'react'
import Post from './Post'
import axios from 'axios'

export default function Profile() {

  const [user, setUser] = useState({
    userName: '',
    profilePic: ''
  })

  
  useEffect(() => {
    
    axios.post('http://localhost:4000/userInfo', {token: localStorage.getItem('token')})
    .then(res => setUser({
      userName: res.data.userName,
      profilePic: res.data.profilePic
    }))

  }, [])

  return (
    <div className='h-full w-full items-center p-6'>
        <div>
          <div className='w-full px-12 pb-6 flex flex-col gap-1 items-center border-blue-500 border-s-2 '>
              <img src={user.profilePic} alt="" className='h-10'/> 
              <h1 className='text-2xl p-0 m-0'>{user.userName}</h1>
        </div>
          <Post/>
          <Post/>
          <Post/>
        </div>

    </div>
  )
}
