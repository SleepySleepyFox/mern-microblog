import React from 'react'

export default function Post() {
  return (
    <div className='p-2 m-2 border-t-2'>
        <div className='flex justify-center items-center w-full'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className='h-10'/>
            <div className='px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dicta porro, inventore fugiat nemo modi consequuntur quas possimus nesciunt ut harum adipisci quam saepe, blanditiis labore sit velit voluptates recusandae?</div>
        </div>
        <div className='flex items-baseline gap-3 opacity-70 p-0 m-0'>
            <div>
            <img className='w-4' src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1"/>
            </div>
            <div className='ml-auto'>Follow</div>
        </div>
    </div>
  )
}
