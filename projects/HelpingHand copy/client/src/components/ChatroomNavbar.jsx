import React from 'react'
import {Link} from "react-router-dom"

const ChatroomNavbar = () => {
  return (
    <div >
      <div className='chatroom_navbar_alignment'>
        <h1 style={{color:"red"}}>Helping hand</h1>
        <Link className="nav-link" to="/"> <h3 >Home</h3> </Link>
      </div>

    </div>
  )
}

export default ChatroomNavbar