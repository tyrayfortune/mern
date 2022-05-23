import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'

const ViewPirate = (props) => {

        //STATE FOR holding one pirate
        const [pirate, setPirate] = useState()
        const navigate = useNavigate()

        // GET PATH VARIABLE FROM REACT ROUTER
        const { pirate_id } = useParams()

        useEffect(() => {
          axios.get("http://localhost:8000/api/pirates/" + pirate_id)
          //sets the prduct into state so you can display it in your return 
          .then(res => setPirate(res.data))
          .catch(err => console.log(err))
  
      }, [])

  return (

    <div>view pirate
      <Link to="/pirates">Home</Link>
      {
        (pirate) ?
        <div>
        <h1>{pirate.pirateName}</h1>
        <h4><img src={pirate.imageURL} alt="" /></h4>
        <h2>{pirate.pirateCatchPhrase}</h2>

        <h2>About:</h2>
        <h5>position:{pirate.crewPosition}</h5>
        <h5>Treasures:{pirate.treasureChests}</h5>
        <h5>Peg Leg:{pirate.pegLeg}</h5>
        <h5>Eye Patch:{pirate.eyePatch}</h5>
        <h5>Hook Hand:{pirate.hookHand}</h5>

      </div> : <h5>loading,..</h5>
      }
    </div>
  )
}

export default ViewPirate