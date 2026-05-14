import { useAuth } from '../../hooks/useAuth'
import './Header.css'
function Header() {
    const { user, logout } = useAuth()
  
    return (
      <header className="navbar">
        <h2>Usuarios</h2>
  
        <div className="nav-right">
          <span>{user.username}</span>
  
          <button onClick={logout}>
            Logout
          </button>
        </div>
      </header>
    )
  }

  export default Header;