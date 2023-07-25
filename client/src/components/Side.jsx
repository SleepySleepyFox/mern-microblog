import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Side() {
  return (
    <>
      <div className='h-full w-12 flex justify-center pt-12'>
        <div className='w-6 h-full flex flex-col gap-6'>
       <Link to={'/profile'}>
        <img
            className='w-16' 
            src="https://img.icons8.com/ios/50/gender-neutral-user--v1.png" 
            alt="gender-neutral-user--v1"/>
       </Link>
   
   
        <Link to={'/'}>
            <img  
            src="https://img.icons8.com/ios/50/news.png" 
            alt="news"/>
        </Link>
    </div> 
    </div>
    <Outlet/>
    </>
  )
}
