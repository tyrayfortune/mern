import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'

const Dashboard = (props) => {
    //STATE HOLDING ALL THE NAMES, make sure to have useeffect be an array because 
    //thats how we get it from DB
    const [allPirates, setAllPirates] = useState([])

        //DESTRUCT REFRESH FROM PROPS
        const {refreshState, refresh} = props

        useEffect(() => {
          // MAKING A CALL TO EXPRESS TO GETALL THE NAMES
          axios.get("http://localhost:8000/api/pirates/")
          //this is how you set all your products from your DB so you can map
          .then(res => {setAllPirates(res.data)})//incoming products are set to state
          .catch(err => console.log(err))
          //passing in refreshstate otherwise products wouldnt get updated when they get creatd in the form
      }, [refreshState] )

        //id is getting called from the delete button
        const deleteHandler = (id) => {
          axios.delete("http://localhost:8000/api/pirates/" + id)
          .then( res => refresh())
          .catch(err => console.log(err))
      }

  return (
    <div>
        <h1>Pirate Crew</h1>
        <Link to="/pirate/new">Add Pirate</Link>
        {
            allPirates.map((pirate, index) =>{
                return (
                  <table>
                    <thead>
                      <tr>
                        <th> <h3>Pirate:</h3></th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <h4><img id="container" src={pirate.imageURL} alt="" /></h4>
                      </td>
                      <td>
                        <h4>{pirate.pirateName}</h4>
                      </td>
                      <td>
                        <Link to={"/pirate/" + pirate._id}><button>View Pirate</button></Link>
                      </td>
                      <td>
                      <button onClick={(e) => deleteHandler(pirate._id)}>Walk the Plank</button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  
                )
            })
        }



    </div>
  )
}

export default Dashboard