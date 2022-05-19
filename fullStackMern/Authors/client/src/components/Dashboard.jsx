import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
const Dashboard = (props) => {
    //STATE HOLDING ALL THE NAMES, make sure to have useeffect be an array because 
    //thats how we get it from DB
    const [allNames, setAllNames] = useState([])

    //DESTRUCT REFRESH FROM PROPS
    const {refreshState, refresh} = props

    useEffect(() => {
      // MAKING A CALL TO EXPRESS TO GETALL THE NAMES
      axios.get("http://localhost:8000/api/authors")
      //this is how you set all your products from your DB so you can map
      .then(res => {setAllNames(res.data)})//incoming products are set to state
      .catch(err => console.log(err))
      //passing in refreshstate otherwise products wouldnt get updated when they get creatd in the form
  }, [refreshState] )


        //id is getting called from the delete button
        const deleteHandler = (id) => {
          axios.delete("http://localhost:8000/api/authors/" + id)
          .then( res => refresh())
          .catch(err => console.log(err))
      }


  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to="/new">Add an Author</Link>

        <h3>We have quotes by:</h3>
        {
          //for mapping thru all your names, enabled by ur axios aswell
          allNames.map((authorName,index) =>{
            return(
              <table key={index}>
                <thead>
                <tr>
                  <th><h2>Author</h2></th>
                  <th><h2>Actions available</h2></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h4 key={index}>{authorName.name}</h4>
                  </td>
                  <td>
                      <h4>
                      <button onClick={(e) => deleteHandler(authorName._id)}>Delete</button>
                      <Link to={"/edit/" + authorName._id}><button >Edit</button></Link>
                      </h4>
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