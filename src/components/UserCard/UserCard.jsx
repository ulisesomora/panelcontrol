import React from 'react'
import './UserCard.css'

const UserCard = ({user}) => {
  return (
    <article>
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
    </article>
  )
}

export default UserCard