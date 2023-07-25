import React from 'react'
import Post from './Post'

export default function Profile() {
  return (
    <div className='h-full w-full items-center p-6'>
        <div>
          <div className='w-full px-12 pb-6 flex flex-col gap-1 items-center border-blue-500 border-s-2 '>
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className='h-10'/> 
              <h1 className='text-2xl p-0 m-0'>Name</h1>
        </div>
          <Post/>
          <Post/>
          <Post/>
        </div>

    </div>
  )
}
