import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUsers } from '../../api/usersApi'

import Loader from '../../components/Loader/Loader'

import './UserDetail.css'

const UserDetail = () => {
  const { id } = useParams()


  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  console.log(user)
  console.log(id)

  //Cargar Usuarios
  useEffect(() => {
    async function loadUser() {
      try {
        setLoading(true)

        const users = await getUsers()
        const foundUser = users.find(
          (u) => u.login.uuid === id
        )
        console.log(users)
        if (!foundUser) {
          setError('Usuario no encontrado')
          return
        }

        setUser(foundUser)
      } catch (err) {
        console.error(err)
        setError('Error cargando usuario')
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [id])

  if (loading) return <Loader />
  if (error) {
    return (
      <section className="user-detail">
        <p className="error">{error}</p>

        <Link to={-1}>
          Volver al listado
        </Link>
      </section>
    )
  }
  return (
    <section className="user-detail">
      <div className="user-detail-header">
        <Link to="/users">
          ← Volver
        </Link>
      </div>
      <div className="user-card-detail">

        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />

        <h1>
          {user.name.first} {user.name.last}
        </h1>

        <p>{user.email}</p>

        <p>{user.phone}</p>

        <p>
          {user.location.city},{' '}
          {user.location.country}
        </p>

        <p>Edad: {user.dob.age}</p>

        <p>Género: {user.gender}</p>

        <p>Nacionalidad: {user.nat}</p>
      </div>



    </section>
  )
}

export default UserDetail