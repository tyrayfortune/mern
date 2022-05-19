import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'
const EditForm = (props) => {
    const navigate = useNavigate()

    const[name, setName] = useState("")

        // GET PATH VARIABLE FROM REACT ROUTER
        const { author_id } = useParams()

        // STATE FOR BACK-END VALIDATIONS MESSAGES
    const [err, setErr] = useState([])


        useEffect(() => {
            axios.get("http://localhost:8000/api/authors/" + author_id)
                .then(res => {
                    const {name} = res.data
                    setName(name)
                })
                .catch(err =>{
                    console.log(err)
                })
        },[])

        const updateHandler = (event) =>{
            event.preventDefault()
            //creating an obj with product info so we can pass it into DB (look at usestate to see what form its in prior)
            const nameObj={
                name
            }
            //make post request to express with author obj to put in DB
            axios.put("http://localhost:8000/api/authors/"+author_id , nameObj)
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
    <div>
        <h1>Favorite Authors</h1>
        <Link to="/">Home</Link>
        <h3>Edit this Author</h3>
        <form onSubmit={updateHandler}>
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

export default EditForm