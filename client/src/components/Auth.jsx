import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const auth = axios.post('http://localhost:4000/auth', {
      username: userName,
      password: password,
    })

    const token = (await auth).data.token
    localStorage.setItem('token', token)

    await location.reload()
  }
  return (

      <div>
      <form onSubmit={handleSubmit} className='bg-slate-100 w-[400px] h-[600px] rounded-md flex flex-col p-12 gap-2 justify-center'>
        <h1 className='font-bold'>Log In</h1>
        <input type="text" placeholder='Username' className='p-2' onChange={(e) => {setUserName(e.target.value)}}/>
         <input type="password" placeholder='Password' className='p-2' onChange={(e) => {setPassword(e.target.value)}}/>
         <button type='submit' className='bg-blue-500 p-2 text-white active:bg-blue-600'>Log In</button>
      </form>
      </div>

  )
}
