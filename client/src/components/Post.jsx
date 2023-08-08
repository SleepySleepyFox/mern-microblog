import React from 'react'

export default function Post(props) {
  return (
    <div className='p-2 m-2 border-t-2'>
        <div className='flex justify-start items-center w-full'>
            
              <img src={props.profilePic} alt="" className='max-h-10'/>
        
            
            <div className='px-4'>{props.post}</div>
        </div>
        <div className='mt-auto flex items-end justify-start gap-3 opacity-70'>
            <div>
            <img className='w-4 mt-auto' src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1"/>
            </div>
            <div className='ml-auto'>Follow</div>
        </div>
    </div>
  )
}
