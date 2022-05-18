import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"



const EditForm = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // GET PATH VARIABLE FROM REACT ROUTER
    const { product_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => {
                const {title, price, description} = res.data
                setTitle(title)
                setPrice(price)
                setDescription(description)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    const updateHandler = (event) =>{
        event.preventDefault()
        // CREATE AN OBJECT WITH THE Product INFO
        const productObj = {
            title,
            price,
            description
        }
        // MAKE PUT REQUEST TO EXPRESS WITH productObj
        axios.put("http://localhost:8000/api/products/"+product_id, productObj)
            .then(res => navigate('/') )
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <fieldset>
            <legend>EditForm.jsx</legend>
            <form onSubmit={updateHandler}>
                <p>
                    Title:
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p>
                    Price:
                    <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    Description:
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <button>Update</button>
            </form>

        </fieldset>
    )
}

export default EditForm