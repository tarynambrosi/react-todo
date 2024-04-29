import { useAuth } from "../../contexts/AuthContext"
import './Auth.css'

export default function Profile() {

    const { currentUser } = useAuth()

  return (
    <span className="profile p-2">
        Hi {!currentUser.displayName ? currentUser.email : currentUser.displayName}!
        <img src={currentUser.photoURL} alt={`${currentUser.email}'s avatar`} />
    </span>
  )
}