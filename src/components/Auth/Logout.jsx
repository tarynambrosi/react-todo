import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Profile from './Profile'

export default function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()
  
    function handleAuth() {
      logout()
      navigate('/')
    }
  
    return (
      <div className="logout text-center p-3 text-white">
          <Profile />
          <button onClick={handleAuth} className="logoutButton">
              Logout
          </button>
      </div>
    )
  }