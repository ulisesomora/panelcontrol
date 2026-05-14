import React, { useEffect, useMemo, useState } from 'react'
import { getUsers } from '../../api/usersApi'
import Loader from '../../components/Loader/Loader'
import Header from '../../components/Header/Header'

import './Users.css'
import UserCard from '../../components/UserCard/UserCard'
import Filters from '../../components/Filters/Filters'
import { exportUsersToCSV } from '../../Services/csvExport'

const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

     // exportación
    const [exporting, setExporting] = useState(false)

    // filtros
    const [filters, setFilters] = useState({
        gender: '',
        nationality: '',
        minAge: '',
        maxAge: '',
    })

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesGender =
        !filters.gender || user.gender === filters.gender

      const matchesNationality =
        !filters.nationality || user.nat === filters.nationality

      const matchesMinAge =
        !filters.minAge || user.dob.age >= Number(filters.minAge)

      const matchesMaxAge =
        !filters.maxAge || user.dob.age <= Number(filters.maxAge)

      return (
        matchesGender &&
        matchesNationality &&
        matchesMinAge &&
        matchesMaxAge
      )
    })
  }, [users, filters])


  // EXPORTAR CSV (ASYNC UX)
  async function handleExport() {
    try {
      setExporting(true)

      await exportUsersToCSV(filteredUsers)

      alert('Exportación completada correctamente')
    } catch (error) {
      console.error(error)
      alert('Error al exportar usuarios')
    } finally {
      setExporting(false)
    }
  }

    useEffect(() => {
        async function loadUsers() {
            try {
                const data = await getUsers()
                setUsers(data)
            } catch (error) {
                console.error("Error cargando usuarios", error)
            }finally{
                setLoading(false)
            }
        }

        loadUsers()
    }, [])

    if (loading) return <Loader />
    return (
        <>
        <Header/>
        <Filters
            filters={filters}
            setFilters={setFilters}
        />
        {/* BOTON DE EXPORTAR */}
        <div className="actions-bar">
            <button
            onClick={handleExport}
            disabled={exporting}
            >
            {exporting
                ? 'Exportando usuarios...'
                : 'Exportar CSV'}
            </button>
        </div>
        {/* lISTA DE USUARIOS*/}
        <main className='users-grid'>
            {
                filteredUsers?.map(user=>(
                    <UserCard
                    key={user.login.uuid}
                    user={user}
                     />
                ))
            }

        </main>
        </>
    )
}

export default Users