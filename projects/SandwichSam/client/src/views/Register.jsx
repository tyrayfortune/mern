import React from 'react'
import RegisterForm from '../components/RegisterForm'
const Register = (props) => {

        //DESTRUCT REFRESH FROM PROPS
        const {refreshState, refresh} = props
  return (
    <div>
        <RegisterForm refresh={refresh} refreshState={refreshState}/>
    </div>
  )
}

export default Register