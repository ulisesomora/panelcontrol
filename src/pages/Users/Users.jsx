import React, { useEffect, useState } from 'react'
import { getUsers } from '../../api/usersApi'
import Loader from '../../components/Loader/Loader'
import Header from '../../components/Header/Header'

import './Users.css'

const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

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
        <main className='users-grid'>
            {
                users?.map(user=>(
                    <div>
                        {user.name.first}
                    </div>
                ))
            }

        </main>
        </>
    )
}

export default Users