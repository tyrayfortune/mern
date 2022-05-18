import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"

const Dashboard = (props) => {
    //STATE HOLDING ALL THE PRODUCTS, make sure to have useeffect be an array because 
    //thats how we get it from DB
    const [allProducts, setAllProducts] = useState([])

    //DESTRUCT REFRESH FROM PROPS
    const {refreshState, refresh} = props

    useEffect(() => {
        // MAKING A CALL TO EXPRESS TO GETALL THE BOOKS
        axios.get("http://localhost:8000/api/products")
        //this is how you set all your products from your DB so you can map
        .then(res => {setAllProducts(res.data)})//incoming products are set to state
        .catch(err => console.log(err))
        //passing in refreshstate otherwise products wouldnt get updated when they get creatd in the form
    }, [refreshState] )

        //id is getting called from the delete button
    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
        .then( res => refresh())
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Products</h1>
            {
                //for mapping thru all your products, enabled by ur axios aswell
                allProducts.map((product, index) => {
                    return(
                        // this Link gets the products id from the product map, so u can link to certain page
                        <div key={index}>
                            <Link  key={index} to={"/" + product._id} >
                            <h2>{product.title}</h2>
                        </Link>
                            <Link to={"/"+ product._id +"/edit"} > 
                                Edit
                            </Link>
                            {/* passing the ID to the delete handler so we can call it in the delete function */}
                            <button onClick={(e) => deleteHandler(product._id)}>Delete</button>
                        </div>
                        
                    )
                })
            }
            
            

        </div>
    )
}

export default Dashboard