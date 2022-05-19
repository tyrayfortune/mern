import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

const NewForm = (props) => {
    const [name, setName] = useState("")
    //declaring my state for each item ima need

    const navigate = useNavigate()

        // STATE FOR BACK-END VALIDATIONS MESSAGES
        const [err, setErr] = useState([])


        //DESTRUCT REFRESH FROM PROPS
        const {refreshState, refresh} = props

    const createHandler = (event) =>{
        event.preventDefault()
        //creating an obj with product info so we can pass it into DB (look at usestate to see what form its in prior)
        const nameObj={
            name
        }
        //make post request to express with author obj to put in DB
        axios.post("http://localhost:8000/api/authors", nameObj)
        //redirects to homepage
        .then(res => navigate('/') )
        .catch(err => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            const errorObj = {}
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)

                errorObj[key] = errorResponse[key].message
            }
            // setErrorObj(errorObj)
            setErr(errorArr)
        })
    }

  return (
    <div >
        <h1>Favorite Authors</h1>
        <h3>Add a new Author:</h3>
        <Link to="/">Home</Link>
        <form onSubmit={createHandler}>
            <p>
                Name:
                {/* value is to switch it back to blank after submission */}
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
            </p>
            <button>Submit</button>
            <Link to="/"> <button>Cancel</button></Link>
            
        </form>
            {/* ERROR MAPPING */}
        {
                err.map((errorMessage, index) => {
                    return(
                        <p key={index}>{errorMessage}</p>
                    )
                })
            }


    </div>
  )
}

export default NewForm