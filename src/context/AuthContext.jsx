import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider  ({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Revisar si ya está logeado
    useEffect(()=>{
        const saveUsers = localStorage.getItem('auth-user')
        if(saveUsers){
            setUser(JSON.parse(saveUsers))
        }
        setLoading(false)
    },[])

    //si no está logeado, pide usuario y contraseña, y la sesión queda abierta
    function login(username, password){
        if(username === "admin" && password === "123"){
            const userData = {username}
            localStorage.setItem('auth-user', JSON.stringify(userData))
            setUser(userData)
            return true
        }
        return false
    }

    function logout(){
        setUser(null)
        localStorage.removeItem('auth-user')
    }


  return (
   <AuthContext.Provider
    value={{
        user,
        login,
        logout,
        loading
    }}
   >
    {children}
   </AuthContext.Provider>

  )
}
