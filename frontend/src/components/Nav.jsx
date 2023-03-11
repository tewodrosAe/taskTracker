import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="nav">
      <Link className="logo" to='/'>TaskRead</Link>
      <div className="nav-links">
        <div className="nav-link nav-ignored">Logout</div>
        <Link to='/login' className='nav-link'>Login</Link>
        <Link to='/signup' className='nav-link'>Signup</Link>
      </div>
    </div>
  )
}

export default Nav