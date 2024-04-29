import { useAuth } from "../../contexts/AuthContext"
import Logout from "../Auth/Logout"
import './Routing.css'

export default function Footer() {
  const { currentUser } = useAuth()

  return (
    <>
    <div className="footer text-center p-4">
      {currentUser && <Logout />}
      <strong>&copy; {new Date().getFullYear()} Taryn Ambrosi, All Rights Reserved</strong>
    </div>
    </>
  )
}