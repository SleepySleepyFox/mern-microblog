import axios from 'axios'
import React from 'react'

// If userName were found in array likedBy --> display liked status on post 
// Change array and display on click

export default function Post(props) {
  const handleLike = (userName, id) => {
     axios.post('http://localhost:4000/likeUpdate', {userName, id})
    }
   
  return (
    <div className='p-2 m-2 border-t-2 '>
        <div className='flex justify-start items-center max-w-full'>
            
              <img src={props.profilePic} alt="" className='max-h-10 pr-2'/>
        
            
            <div className='w-fit max-w-[90%] h-fit break-words'>
              {props.post}
            </div>
        </div>
        <div className='mt-auto flex items-end justify-start gap-3 opacity-70'>
            <div>
              {props.likedBy.includes(props.user) ? 
              <img className='w-4 mt-auto' src="https://img.icons8.com/ios-filled/50/like--v1.png" alt="filled-heart" onClick={() => handleLike(props.user, props.id)}/> :
              <img className='w-4 mt-auto' src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1" onClick={() => handleLike(props.user, props.id)}/>
          }
            </div>
            <div className='ml-auto'>Follow</div>
        </div>
    </div>
  )
}
