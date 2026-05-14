import React, { useEffect } from 'react'
import { getUsers } from '../../api/usersApi'

const Users = () => {

    useEffect(() => {
        async function loadUsers() {
            try {
                const data = await getUsers()
                console.log(data)
            } catch (error) {
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

export default Users