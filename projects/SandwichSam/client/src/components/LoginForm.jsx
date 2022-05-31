import React, { useState } from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

const LoginForm = (props) => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  })
     
  const navigate = useNavigate()

  const [errorState, setErrorState] = useState("")



    const loginSubmit = e => {
      e.preventDefault()
      axios.post("http://localhost:8000/api/users/login", loginState, { withCredentials: true })
        .then(res => navigate('/'))
        .catch(err => {
          //console log err to see what msgs you can pull, then make a const with the responce
          console.log(err)
          const { msg } = err.response.data;
          console.log(msg)
          setErrorState(msg)
        })
    }

    const loginChangeHandler = e => {
      setLoginState({
        ...loginState,
        [e.target.name]: e.target.value
      })
    }

  return (
    <div>
      <p className="ml-1 text-danger font-weight-bold">{errorState}</p>
      <h1>Login to Sandwich Sam!</h1>
      <form onSubmit={loginSubmit}>
        <p>
          Email:
          <input name="email" placeholder="email" type="text" onChange={loginChangeHandler} />
           
        </p>
        <p>
          Password:
          <input name="password"  placeholder="password" type="password" onChange={loginChangeHandler} /> 
        </p>
        <button type="submit" className="btn btn-primary">Create My Account!</button>
        <div>
        <Link to="/register"> Need to Register? Click here!</Link>
        </div>
      </form>

        

    </div>
  )
}

export default LoginForm