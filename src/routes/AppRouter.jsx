import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../pages/Users/Users'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/users' element={<Users/>}/>
    </Routes>
  )
}

export default AppRouter