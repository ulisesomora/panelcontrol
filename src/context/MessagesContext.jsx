import { createContext, useEffect, useState } from "react"

export const MessagesContext = createContext()

export function MessagesProvider({children}){
    const [messages, setMessages] = useState([])

    // CARGA DESDE LOCALSTORAGE
    useEffect(() => {
        const stored = localStorage.getItem('messages')
        if (stored) {
          setMessages(JSON.parse(stored))
        }
      }, [])

      // Ponemos el mensaje en LOCALSTORAGE
      useEffect(() => {
        localStorage.setItem(
          'messages',
          JSON.stringify(messages)
        )
      }, [messages])

      // ENVIAR MENSAJE
      function sendMessage(userId, text) {
        const newMessage = {
          id: crypto.randomUUID(),
          userId,
          message: text,
          createdAt: new Date().toISOString(),
        }
    
        setMessages((prev) => [...prev, newMessage])
      }

      // FILTRAR MENSAJES POR USUARIO
      function getMessagesByUser(userId) {
        return messages.filter(
          (msg) => msg.userId === userId
        )
      }

      return (
        <MessagesContext.Provider
          value={{
            messages,
            sendMessage,
            getMessagesByUser,
          }}
        >
          {children}
        </MessagesContext.Provider>
      )

}