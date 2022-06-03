import axios from "axios"
import Navbar from "../components/Navbar"
import {Link, useNavigate, useParams} from "react-router-dom"
import React, {useState, useEffect} from 'react'


const Payment = (props) => {
          //DESTRUCT REFRESH FROM PROPS
          const {refreshState, refresh} = props

        //STATE FOR holding one sandwich
        const [sandwich, setSandwich] = useState()
        const navigate = useNavigate()

        // GET PATH VARIABLE FROM REACT ROUTER
        const { sandwich_id } = useParams()

        useEffect(() => {
          axios.get("http://localhost:8000/api/sandwiches/" + sandwich_id)
          //sets the product into state so you can display it in your return 
        .then(res => setSandwich(res.data))
        .catch(err => console.log(err))
    }, [refreshState])

    function lettuce(object){
      Object.keys(object).map((key) => (
        
        console.log()
        ))
      }

  return (
    <div className='container'>   
        <Navbar/>
        <h3>Current Order</h3>
        {
            (sandwich) ?
            <div>
                <h4>Method:{sandwich.method}</h4>
                <h4>Size:{sandwich.sandwichSize}</h4>
                <h4>Bread Type:{sandwich.breadType}</h4>
                <h4>Quantity: {sandwich.quantity}</h4>
                <h4>Quantity: {String(sandwich.ham)}</h4>
            </div> : <h4>loading.</h4>
        }
        {
            //     Object.keys(sandwich).map((key, i) => (
            //     (sandwich[key]) ? 
            // <div>
            //   <p key={i}>topping: {key}</p>
            // </div> : null 
              
            // )) 

        }
        

        <form action="">
            <h4>Address</h4>
            
            <input type="text" name="" placeholder="street" />
            <input type="text" name="" placeholder="city" />
            <input type="text" name="" placeholder="state" />
            <input type="text" name="" placeholder="zip" />
        </form>

        

    
    </div>
  )
}

export default Payment