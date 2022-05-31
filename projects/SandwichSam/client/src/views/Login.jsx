import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = (props) => {
        //DESTRUCT REFRESH FROM PROPS
        const {refreshState, refresh} = props
  return (
    <div>
        <LoginForm refresh={refresh} refreshState={refreshState}/>
    </div>
  )
}

export default Login
