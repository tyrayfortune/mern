import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/'><h3 class="font-weight-bold" href="#">Sandwich Sam</h3></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/orders" className="nav-link" >Orders </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link" >Account Settings</Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">Logout</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar