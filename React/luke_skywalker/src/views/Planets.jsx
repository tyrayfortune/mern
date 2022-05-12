import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Planets = () => {
const [planets, setPlanets] = useState({})
const {id} = useParams()


useEffect(() => {
    axios.get("https://swapi.dev/api/planets/" + id)
    .then(res => {
        console.log(res.data)
        setPlanets(res.data)
    })
    .catch(err => console.log(err))
        }, [id])

  return (
    <div>
        <h1>Name: {planets.name}</h1>
        <h3>Climate: {planets.climate}</h3>
        <h3>Terrain: {planets.terrain}</h3>
        <h3>Surface Water: {planets.surface_water}</h3>
        <h3>population: {planets.population}</h3>
    </div>
  )
}

export default Planets