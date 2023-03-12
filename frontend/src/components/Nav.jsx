import { Link } from "react-router-dom"
import { UserContext } from "../context/userContext"
import useUserContext from "../hooks/useUserContext"
import useLogout from "../hooks/useLogout"

function Nav() {
  const { user } = useUserContext()
  const logout = useLogout()
  return (
    <div className="nav">
      <Link className="logo" to='/'>TaskRead</Link>
      <div className="nav-links">
        <div className={`nav-link ${!user && "nav-ignored"}`} onClick={logout} >Logout</div>
        <Link to='/login' className={`nav-link ${user && "nav-ignored"}`}>Login</Link>
        <Link to='/signup' className={`nav-link ${user && "nav-ignored"}`}>Signup</Link>
      </div>
    </div>
  )
}

export default Nav