import { useEffect, useState } from 'react'
import './App.css'
import { getUsers } from './api/usersApi'

function App() {

  useEffect(()=>{
    async function loadUsers() {
      try{
        const data = await getUsers()
        console.log(data)
      }catch(error){
        console.error("Error cargando usuarios", error)
      }
    }

    loadUsers()
  }, [])

  return (
    <>
    <h1>Hola, empezando prueba tecnica</h1>
    </>
  )
}

export default App
