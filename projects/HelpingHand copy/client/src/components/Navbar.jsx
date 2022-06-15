import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h3 className="font-weight-bold" href="#">Helping Hand</h3>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/orders" className="nav-link" >Near You</Link>
                </li>
                <li className="nav-item">
                    <Link to="/chatroom" className="nav-link" >Chatroom</Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">Friends</Link>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar