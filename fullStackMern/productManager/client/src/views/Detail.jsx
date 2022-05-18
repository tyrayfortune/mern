import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {Link, useNavigate} from "react-router-dom"

const Detail = () => {
    //STATE FOR holding one product
    const [product, setProduct] = useState()
    const navigate = useNavigate()

    //PULLING THE PRODUCT_ID from app JS so u can insert it into you AXIOS
    const{product_id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + product_id)
        //sets the prduct into state so you can display it in your return 
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))

    }, [])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
        .then(res => navigate("/") )
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Details</h1>
    {
    (product) ?
    <div>
        <h4>Title:{product.title}</h4>
        <h4>Price:{product.price}</h4>
        <h4>Description:{product.description}</h4>
        {/* links, one to homepage basic, one requiring di and to the edit page */}
        <button><Link to={"/"+ product._id +"/edit"} > 
            Edit
        </Link></button>
        {/* delete handler also getting id */}
        <button onClick={(e) => deleteHandler(product._id)}>Delete</button>
        <button><Link to={"/"}>home</Link></button>
    </div> : <h5>loading..</h5>
    }


    </div>
  )
}

export default Detail