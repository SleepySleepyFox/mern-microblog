import React, { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState()

  console.log(profilePic)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const base64 = await convertToBase64(profilePic)

    const register = axios.post('http://localhost:4000/register', {
      username: userName,
      password: password,
      pfp: base64
    })

    const token = (await register).data
    localStorage.setItem('token', token)

    await location.reload()

  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  return (

      <div>
      <form onSubmit={handleSubmit} className='bg-slate-100 w-[400px] h-[600px] rounded-md flex flex-col p-12 gap-2 justify-center'>
        <h1 className='font-bold'>Register</h1>
        <input type="text" placeholder='Username' className='p-2' onChange={(e) => {setUserName(e.target.value)}}/>
         <input type="password" placeholder='Password' className='p-2' onChange={(e) => {setPassword(e.target.value)}}/>
         <input type='file' accept="image/png, image/jpeg"  onChange={(e) => {setProfilePic(e.target.files[0])}}/>
         <button type='submit' className='bg-blue-500 p-2 text-white active:bg-blue-600'>Register</button>
      </form>
      </div>

  )
}
