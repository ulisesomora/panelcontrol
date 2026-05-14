import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../pages/Users/Users'
import Login from '../pages/Login/Login'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/users' element={
        <ProtectedRoute>
          <Users />
        </ProtectedRoute>

      } />
    </Routes>
  )
}

export default AppRouter