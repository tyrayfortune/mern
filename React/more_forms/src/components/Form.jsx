import React, {useState} from 'react'

const Form = (props) => {

    // STATE FOR KEEPING TRACK OF INPUT
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // STATE FOR KEEPING TRACK OF VALIDATIONS
    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")


    const submitHandler = (event) => {
        // Stopping the form from making a POST request
        event.preventDefault()
        console.log("REGISTERING: ", firstName, lastName, password, confirmPassword)

        // RESET THE STATES BACK TO NOTHING
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
        // FIRST NAME MUST BE REQUIRED
        if(event.target.value.length < 1){
            setFirstNameError("FIRST NAME MUST BE REQUIRED")
        }
        // FIRST NAME MUST BE LONGER THAN 2 CHARS
        else if(event.target.value.length < 2){
            setFirstNameError("FIRST NAME MUST BE LONGER THAN 2 CHARS")
        }
        // VALIDATIONS PASS, CLEAR OUT ERROR MESSAGES
        else{
            setFirstNameError("")
        }
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
        if(event.target.value.length < 1){
            setLastNameError("LAST NAME MUST BE REQUIRED")}
        else if(event.target.value.length < 2){
            setLastNameError("LAST NAME MUST BE LONGER THAN 2 CHARS")}
        else{setLastNameError("")}
    }
    const emailHandler = (event) => {
        setEmail(event.target.value)
        if(event.target.value.length < 1){
            setEmailError("EMAIL IS REQUIRED")}
        else if(event.target.value.length < 4){
            setEmailError("EMAIL MUST BE LONGER THEN 4 CHARACTERS")}
        else{setEmailError("")}
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
        if(event.target.value.length < 1){
            setPasswordError("PASSWORD MUST BE REQUIRED")}
        else if(event.target.value.length < 8){
            setPasswordError("PASSWORD MUST BE LONGER THAN 8 CHARS")}
        else{setPasswordError("")}
    }
    const confirmPasswordHandler = (event) => {
        setConfirmPassword(event.target.value)
        if (event.target.value  != password) {
            setConfirmPasswordError("PASSWORDS MUST MATCH")
        }
        else{setConfirmPasswordError("")}
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={submitHandler}>
                <p>
                    First Name:
                    <input type="text" value={firstName} onChange={firstNameHandler } name="firstName" />
                    {
                    //VALDIATIONS
                        firstNameError ? <p style={{color:'red'}}>{firstNameError}</p>  : null
                    }
                </p>
                <p>
                    Last Name:
                    <input type="text" value={lastName} onChange={lastNameHandler } name="firstName" />
                    {
                        lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : null
                    }
                </p>
                <p>
                    Email:
                    <input type="text" value={email} onChange={emailHandler } name="lastName" />
                    {
                        emailError ? <p style={{color:'red'}}>{emailError}</p> : null
                    }
                </p>
                <p>
                    Password:
                    <input type="text" value={password} onChange={passwordHandler } name="password" />
                    {
                        passwordError ? <p style={{color:'red'}}>{passwordError}</p> : null
                    }
                </p>
                <p>
                    Confirm Password:
                    <input type="text" value={confirmPassword} onChange={confirmPasswordHandler } name="confirmPassword" />
                    {
                        confirmPasswordError ? <p style={{color:'red'}}>{confirmPasswordError}</p> : null
                    }
                </p>
                <button>Submit</button>
            </form>
            <h2>Your From Data</h2>
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4>
            <h4>Confirm Password: {confirmPassword}</h4>
        </fieldset>
    )
}

export default Form