import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const StarWarsForm = (props) => {
  //option cause its a select drop down, you need the default param in for selects.
const [option, setOption] = useState("people")
const [ID, setID] = useState("")
const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
      //WHERE YOU NAVIGATE TO
  navigate(`/${option}/${ID}`)
}

  return (
    <div>
        <h1>Star Wars API</h1>
    <form onSubmit={handleSubmit}>
          <h5>Search for</h5> 
            <select onChange={(e) => setOption(e.target.value)} name="options">
              <option  value="people">People</option>
              <option  value="planets">Planets</option>
            </select>
          <h3>ID:</h3> <input onChange={(e) => setID(e.target.value)}  type="number" name='ID'/>
        <button >Search</button>
    </form>


    </div>
  )
}

export default StarWarsForm