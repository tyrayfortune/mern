import React from 'react'
import Dashboard from '../components/Dashboard'
import Navbar from "../components/Navbar"
import {Link, useNavigate} from "react-router-dom"
const Main = (props) => {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
    </div>
  )
}

export default Main