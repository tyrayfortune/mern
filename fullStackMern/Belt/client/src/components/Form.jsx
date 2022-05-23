import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

const Form = () => {
    //declaring new state
    const [pirateName, setPirateName] = useState("")
    const [imageURL, setImageURL]  = useState ("")
    const [ treasureChests, setTreasureChests] = useState(0)
    const [ pirateCatchPhrase, setPirateCatchPhrase] = useState("")
    const [crewPosition, setCrewPosition] = useState("Captain")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    const navigate = useNavigate()

        // STATE FOR BACK-END VALIDATIONS MESSAGES
        const [err, setErr] = useState([])

    const createHandler = (event) =>{
        event.preventDefault()
        //creating an obj with product info so we can pass it into DB (look at usestate to see what form its in prior)
        const pirateObj={
            pirateName,
            imageURL,
            treasureChests,
            pirateCatchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        }
        //make post request to express with author obj to put in DB
        axios.post("http://localhost:8000/api/pirates", pirateObj)
                                //BRINGS THE ID IN
        .then(res => navigate('/pirate/' + res.data._id) )
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
        <form onSubmit={createHandler}>
            <p>
                Pirate Name:
                <input type="text" onChange={(e) => setPirateName(e.target.value)} value={pirateName}/>
            </p>
            <p>
                Image Url:
                <input type="text"onChange={(e) => setImageURL(e.target.value)} value={imageURL} />
            </p>
            <p>
            # of Treasure Chests:
                <input type="number" onChange={(e) => setTreasureChests(e.target.value)} value={treasureChests}/>
            </p>
            <p>
            Pirate Catch Phrase:
                <input type="text" onChange={(e) => setPirateCatchPhrase(e.target.value)} value={pirateCatchPhrase}/>
            </p>
            <select onChange={(e) => setCrewPosition(e.target.value)} value={crewPosition}>
              <option  value="Captain">Captain</option>
              <option  value="First Mate">First Mate</option>
              <option  value="Quater Master">Quater Master</option>
              <option  value="Boatswain">Boatswain</option>
              <option  value="Powder Monkey">Powder Monkey</option>
            </select> 
            <div>
            <p> Peg Leg
            <input type="checkbox" onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg}/>
            </p>
            <p> eye patch
            <input type="checkbox" onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch}/>
            </p>
            <p> Hook Hand
            <input type="checkbox" onChange={(e) => setHookHand(e.target.checked)} checked={hookHand}/>
            </p>
            </div>
            <button>Add Pirate</button>

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

export default Form