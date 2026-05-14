import { useState } from 'react'
import './MessageModal.css'

function MessageModal({
    isOpen,
    onClose,
    onSend,
    user,
}) {
    const [message, setMessage] = useState('')

    if (!isOpen) return null
    function handleSubmit(e) {
        e.preventDefault()
        if (!message.trim()) return
        onSend(message)
        setMessage('')
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>
                    Enviar mensaje a{' '}
                    {user?.name.first}
                </h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="textarea"
                        value={message}
                        onChange={(e) =>
                            setMessage(e.target.value)
                        }
                        placeholder="Escribe tu mensaje..."
                    />
                    <div className="modal-actions">
                        <button
                            type="submit"
                            className="btn-primary"
                        >
                            Enviar
                        </button>
                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MessageModal