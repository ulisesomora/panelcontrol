import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

import './Login.css'

const Login = () => {
    
    const navigate = useNavigate()

    //llamamos el hook para el control de datos del context
    const {login} = useAuth()
    console.log("Hola")

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        const success = login(
            form.username,
            form.password
        )

        if(!success){
            setError('Credenciales inválidas')
            return
        }
        navigate("/users")
    }

    function handleChange(e){
        setForm({
            ...form, 
            [e.target.name]:e.target.value,
        })
    }
  

  return (
    <section className='login-page'>
        <form className='login-form'
            onSubmit={handleSubmit}
        >
            <h1>Iniciar Sesión</h1>
            <input type="text"
                name="username"
                placeholder='Usuario'
                onChange={handleChange}
            />
            <input type="password"
                name="password"
                placeholder='Contraseña'
                onChange={handleChange}
            />
            <button type='submit'>
                Entrar
            </button>
            {error && <p>{error}</p>}
        </form>    
    </section>
  )
}

export default Login