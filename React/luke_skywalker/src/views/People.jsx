import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const People = () => {
    //STATE FOR PEOPLE, axios is pulled as a dictionary so thats what you use
const  [people, setPeople] = useState({})
//pulling from app.jsx route name
const {id} = useParams()

useEffect(() => {
    axios.get("https://swapi.dev/api/people/" + id)
    .then(res => {
        console.log(res.data)
        setPeople(res.data)
    })
    .catch(err => console.log(err))
        }, [id])

  return (
    <div>
        <h1>Name: {people.name}</h1>
        <h3>Height: {people.height}</h3>
        <h3>Mass: {people.mass}</h3>
        <h3>Hair Color: {people.hair_color}</h3>
        <h3>Skin Color: {people.skin_color}</h3>
    </div>
  )
}

export default People