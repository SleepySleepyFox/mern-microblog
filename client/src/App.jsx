import React, { useState } from 'react'
import Register from './components/Register'
import Main from './components/Main'
import Side from './components/Side'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Profile from './components/Profile'
import Post from './components/Post'

export default function App() {
  const [loggedin, setLoggedIn] = useState(true)
  return (
   
     <BrowserRouter>
        <div className=' h-screen flex justify-center items-center'>
          <Routes>
            <Route element={<Side/>} path='/'>
              <Route element={<Main/>} path='/'/>
              <Route element={<Profile/>} path='/profile'/>
            </Route>
            <Route element={<Register/>} path='/register'/>
          </Routes>
        </div>
     </BrowserRouter>
  
  )
}
