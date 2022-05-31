import React, { useState } from "react"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"


const RegisterForm = () => {
  //Setting the State
  const [registerState, setRegisterState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [errorState, setErrorState] = useState({})
  const navigate = useNavigate()
  
  const getAllUsers = () => {
    //withCredentials, saying you giving a cookie and expecting one back, need it if your authenticating
axios.get("http://localhost:8000/api/users", { withCredentials: true })
.then(res => console.log(res))
.catch(err => {
console.log(err)
if (err.response.status === 401) {
  console.log("UNAUTHORIZED")
}
else if (err.response.status === 400) {
  console.log("BAD REQUEST")
}
})
}

  const registerSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/users/register", registerState, { withCredentials: true })
      .then(res => navigate("/"))
      .catch(err => {
        console.log(err.response.data)
        const { errors } = err.response.data;
        console.log(errors)
        const errObj = {}

        for (const [key, value] of Object.entries(errors)) {
          console.log(errors[key])
          errObj[key] = value;
        }
        setErrorState(errObj)
      })
  }

  const registerChangeHandler = e => {
    setRegisterState({
      ...registerState,
      [e.target.name]: e.target.value
    })
  }


  return (

    <div>
<h1>Register an Account!</h1>
      <form onSubmit={registerSubmit}>
        <p>
          First Name:
          <input name="firstName" placeholder="First Name" type="text" onChange={registerChangeHandler} />
          {(errorState.firstName) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
        </p>
        <p>
          Last Name:
          <input name="lastName" placeholder="Last Name" type="text" onChange={registerChangeHandler} />
          {(errorState.lastName) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
        </p>
        <p>
          Email:
          <input name="email"  placeholder="Email" type="text" onChange={registerChangeHandler} />
          {(errorState.email) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
          {(errorState.duplicate) ? <small className="ml-1 text-danger font-weight-bold">EMAIL EXISTS</small> : null}
        </p>
        <p>
          Password:
          <input name="password" placeholder="password" type="password" onChange={registerChangeHandler} />
          {(errorState.password) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
        </p>
        <p>
          Confirm Password:
          <input name="confirmPassword" placeholder="confirm password" type="password" onChange={registerChangeHandler} />
          {(errorState.confirmPassword) ? <small className="ml-1 text-danger font-weight-bold">WRONG</small> : null}
        </p>
         <button type="submit" className="btn btn-primary">Create My Account!</button>
        <Link to="/login"> already have an account? click here </Link>
      </form>
    </div>
  )
}

export default RegisterForm