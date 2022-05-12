import React, {useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = (props) => {
    const [apiState, setApiState] = useState()
    
    const eventHandler= () => {
        axios.get("https://pokeapi.co/api/v2/pokemon") // MAKING A REQUEST TO GITHUB API
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setApiState(successResponse.data) // Taking the response data and storing it in state
            }) // successful response
            .catch(errorResponse => console.log("ERROR: ", errorResponse)) // unsuccessful response
    }

  return (
    <div>
            <button onClick={eventHandler}>Fetch Pokemon</button>
            {/* TERNARY OPERATOR with mapping */}
            {/* got to keep the apiState without any ., so its either true or false and ther ternary will work */}
            {/* pokemon was an array of dictionaries, so results was array so had to map it, then  get the item name from the index*/}
            {apiState ? apiState.results.map((item, index) =>{
                // at the items index were getting name, is code below
                return <div key={index}>{item.name}</div>
            }): null}
    </div>
    )
}

export default PokemonList