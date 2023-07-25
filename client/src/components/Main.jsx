import React from 'react'
import Post from './Post'

export default function Main() {
  return (
    <div className='h-full w-full items-center p-6'>
        <div>
          <div className='w-full px-12 pb-6 flex gap-3 items-center border-blue-500 border-s-2 '>
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className='h-10'/> 
              <div className='flex flex-col w-full'>
                  <input type="text" placeholder='Text here...' className='h-16 outline-none '  />
                  <hr className='p-1'/>
                  <button className='border-blue-500 border-2 rounded-md text-blue-500 p-1 w-24 self-end'>Post</button>
            </div>
        </div>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </div>
  )
}
