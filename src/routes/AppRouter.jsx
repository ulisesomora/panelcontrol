import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../pages/Users/Users'
import Login from '../pages/Login/Login'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
    </Routes>
  )
}

export default AppRouter