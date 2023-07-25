import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <Link to={'/register'}>
      <form className='bg-slate-100 w-[400px] h-[600px] rounded-md flex flex-col p-12 gap-2 justify-center'>
        <h1 className='font-bold'>Register</h1>
        <input type="text" placeholder='Username' className='p-2'/>
        <input type="text" placeholder='Email' className='p-2'/>
        <input type='file' accept="image/png, image/jpeg" />
        <button className='bg-blue-500 p-2 text-white'>Register</button>
      </form>
    </Link>
  )
}
