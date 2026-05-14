import React from 'react'
import './UserCard.css'
import { Link } from 'react-router-dom'

const UserCard = ({user, onDelete,onMessage}) => {

  return (
    <article className='user-card'>
        {/* BOTÓN DELETE (hover) */}
        <button
          className="delete-btn"
          onClick={() => onDelete(user)}
        >
          ✕
        </button>
        <img className="avatar" src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`}/>
        <div className="info">
        <h3>
          {user.name.first} {user.name.last}
        </h3>

        <p>{user.email}</p>

        <span className="country">
          {user.location.country}
        </span>
      </div>
      <div className="actions">
      <Link
          className="detail-btn"
          to={`/users/${user.login.uuid}`}
        >
          Ver detalle
        </Link>
        <button
          className="msg-btn"
          onClick={() => onMessage(user)}
        >
          Mensaje
        </button>
      </div>
    </article>
  )
}

export default UserCard