import React, {useState} from 'react'
import axios from "axios"
const Form = (props) => {
    //declaring my state for each item ima need
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    //DESTRUCTURE
    const {refresh} = props

    // handler function
    const createHandler = (event) =>{
        event.preventDefault()
        //create an object with product info
        const productObj ={
            title,
            price,
            description
        }
  
        //make post request to express with product obj
        axios.post("http://localhost:8000/api/products/", productObj)
            .then(res => {
                //refreshes, (THE FORM IS THE BASE FOR the other REFRESHES on dashboard)and resets info
                refresh()
                setTitle("")
                setPrice(0)
                setDescription("")
            })
            .catch(err => console.log(err))
    }

    return (
    <div>
        <h2>Product Manager</h2>
        <form onSubmit={createHandler}>
        <p>
            Title:
            {/* valuie is to switch it back to blank after submsission */}
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
        <button>Create</button>
        </form>
    </div>
    )
}

export default Form