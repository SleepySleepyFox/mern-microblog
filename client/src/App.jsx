import React, { useEffect, useState } from 'react'
import Register from './components/Register'
import Main from './components/Main'
import Side from './components/Side'
import Auth from './components/Auth'
import { BrowserRouter, Navigate, Route, Router, Routes, redirect } from 'react-router-dom'
import Profile from './components/Profile'
import Post from './components/Post'
import axios from 'axios'

export default function App() {
  const [loggedin, setLoggedIn] = useState(null)
  console.log(loggedin)
  useEffect(() => {
    setLoggedIn(localStorage.getItem('token'))
  }, [localStorage.getItem('token')])

  return (

   
     <BrowserRouter>
        <div className=' h-screen flex justify-center items-center'>
          <div onClick={() => {
            localStorage.removeItem('token')
            location.reload()
          }}>X</div>


          <Routes> 
            {loggedin != null ? <Route element={<Navigate to={'/'}/>} path='/auth'/> : <Route element={ <Navigate to={'/auth'}/>} path='/'/>} 
            {loggedin != null && <Route element={<Navigate to={'/'}/>} path='/register'/>}
            <Route element={<Side/>} path='/'>
              <Route element={<Main/>} path='/'/>
              <Route element={<Profile/>} path='/profile'/>
            </Route>   
            <Route element={<Auth/>} path='/auth'/> 
            <Route element={<Register/>} path='/register'/>
          </Routes>
        </div>
     </BrowserRouter> 
  )
}
