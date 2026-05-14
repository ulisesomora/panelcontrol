import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../pages/Users/Users'
import Login from '../pages/Login/Login'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import UserDetail from '../pages/UserDetail/UserDetail'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/users' element={
        <ProtectedRoute>
          <Users />
        </ProtectedRoute>
      } />
      <Route path='/users/:id' element={
        <ProtectedRoute>
          <UserDetail />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default AppRouter