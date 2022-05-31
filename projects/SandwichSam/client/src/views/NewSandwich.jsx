import axios from "axios"
import Navbar from "../components/Navbar"
import {Link, useNavigate} from "react-router-dom"
import React, {useState, useEffect} from 'react'


const NewSandwich = () => {
//getting state
const [sandwichSize, setSandwichSize] = useState("Regular")
const [method, setMethod] = useState("Delivery")
const [breadType, setBreadType] = useState("White")
const [quantity, setQuantity] = useState(1)
const [ham, setHam] = useState(false)
const [turkey, setTurkey] = useState(false)
const [roastBeef, setRoastBeef] = useState(false)
const [pastrami, setPastrami] = useState(false)
const [meatballs, setMeatballs] = useState(false)
const [americanSwiss, setAmericanSwiss] = useState(false)
const [pepperJack, setPepperJack] = useState(false)
const [sharpChedder, setSharpChedder] = useState(false)
const [lowFatAmerican, setLowFatAmerican] = useState(false)
const [dairyFreeSwiss, setDairyFreeSwiss] = useState(false)
const [lettuce, setLettuce] = useState(false)
const [tomatoe, setTomatoe] = useState(false)
const [onion, setOnion] = useState(false)
const [cucumber, setCucumber] = useState(false)
const [jalapeno, setJalapeno] = useState(false)
const [mustard, setMustard] = useState(false)
const [mayo, setMayo] = useState(false)
const [groundPepper, setGroundPepper] = useState(false)
const [chipotle, setChipotle] = useState(false)
const [pesto, setPesto] = useState(false)

    //dustructing navigate
    const navigate = useNavigate()

    const createHandler = (event) =>{
        event.preventDefault()
        //creating an obj with product info so we can pass it into DB (look at usestate to see what form its in prior)
        const sandwichObj={
            //sandwich General
            sandwichSize,
            method,
            breadType,
            quantity,
            //sandwich meats
            ham,
            turkey,
            roastBeef,
            pastrami,
            meatballs,
            //Cheeses
            americanSwiss,
            pepperJack,
            sharpChedder,
            lowFatAmerican,
            dairyFreeSwiss,
            //TOPPINGS
            lettuce,
            tomatoe,
            onion,
            cucumber,
            jalapeno,
            //condiments
            mustard,
            mayo,
            groundPepper,
            chipotle,
            pesto
        }
        //make post request to express with obj to put in DB
        axios.post("http://localhost:8000/api/sandwiches/", sandwichObj)
                                //BRINGS THE ID IN
        .then(res => navigate('/payment/' +  res.data._id) )
        .catch(err => console.log(err))
        }


  return (
    <div className="container">
        <Navbar/>
        <h3 >Make a custom Sandwich!</h3>
        <form onSubmit={createHandler}>
            <div >
                <h5>Method:</h5>
                <select name="method" id="">
                    <option value="delivery">Delivery</option>
                    <option value="take-out">Take-out</option>
                </select>
                <h5>Size:</h5>
                <select name="sandwichSize" id="">
                    <option value="delivery">Regular</option>
                    <option value="take-out">Large</option>
                </select>
                <h5>Bread:</h5>
                <select name="breadType" id="">
                    <option value="delivery">White</option>
                    <option value="take-out">Wheat</option>
                    <option value="delivery">Sourdough</option>
                    <option value="take-out">Italian</option>
                </select>
                <h5>Quantity</h5>
                <input type="number" placeholder="1" />
            </div>

                <div className="row">
                <div className="col-sm">
                    <h4>Meats</h4>
                    <p> Ham
                    <input type="checkbox" onChange={(e) => setHam(e.target.checked)} checked={ham}/>
                    </p>
                    <p> Turkey
                    <input type="checkbox" onChange={(e) => setTurkey(e.target.checked)} checked={turkey}/>
                    </p>
                    <p> Roast beef
                    <input type="checkbox" onChange={(e) => setRoastBeef(e.target.checked)} checked={roastBeef}/>
                    </p>
                    <p> Pastrami
                    <input type="checkbox" onChange={(e) => setPastrami(e.target.checked)} checked={pastrami}/>
                    </p>
                    <p> Meatballs
                    <input type="checkbox" onChange={(e) => setMeatballs(e.target.checked)} checked={meatballs}/>
                    </p>
                </div>
                <div className="col-sm">
                    <h4>Cheeses</h4>
                    <p> American Swiss
                    <input type="checkbox" onChange={(e) => setAmericanSwiss(e.target.checked)} checked={americanSwiss}/>
                    </p>
                    <p> Pepperjack
                    <input type="checkbox" onChange={(e) => setPepperJack(e.target.checked)} checked={pepperJack}/>
                    </p>
                    <p> Sharp chedder
                    <input type="checkbox" onChange={(e) => setSharpChedder(e.target.checked)} checked={sharpChedder}/>
                    </p>
                    <p> low-fat American
                    <input type="checkbox" onChange={(e) => setLowFatAmerican(e.target.checked)} checked={lowFatAmerican}/>
                    </p>
                    <p> dairy-free Swiss
                    <input type="checkbox" onChange={(e) => setDairyFreeSwiss(e.target.checked)} checked={dairyFreeSwiss}/>
                    </p>
                </div>
                <div className="col-sm">
                    <h4>Veggies</h4>
                    <p> Lettuce
                    <input type="checkbox" onChange={(e) => setLettuce(e.target.checked)} checked={lettuce}/>
                    </p>
                    <p> Tomatoe
                    <input type="checkbox" onChange={(e) => setTomatoe(e.target.checked)} checked={tomatoe}/>
                    </p>
                    <p> Onion
                    <input type="checkbox" onChange={(e) => setOnion(e.target.checked)} checked={onion}/>
                    </p>
                    <p> Cucumber 
                    <input type="checkbox" onChange={(e) => setCucumber(e.target.checked)} checked={cucumber}/>
                    </p>
                    <p> Jalapeno
                    <input type="checkbox" onChange={(e) => setJalapeno(e.target.checked)} checked={jalapeno}/>
                    </p>
                </div>
                <div className="col-sm">
                    <h4>Condiments</h4>
                    <p> Mustard
                    <input type="checkbox" onChange={(e) => setMustard(e.target.checked)} checked={mustard}/>
                    </p>
                    <p> Mayo
                    <input type="checkbox" onChange={(e) => setMayo(e.target.checked)} checked={mayo}/>
                    </p>
                    <p> ground Pepper
                    <input type="checkbox" onChange={(e) => setGroundPepper(e.target.checked)} checked={groundPepper}/>
                    </p>
                    <p> Chipotle
                    <input type="checkbox" onChange={(e) => setChipotle(e.target.checked)} checked={chipotle}/>
                    </p>
                    <p> Pesto
                    <input type="checkbox" onChange={(e) => setPesto(e.target.checked)} checked={pesto}/>
                    </p>
                </div>
                </div>
            <button>Order Sub!</button>
            <Link to="new/sandwich"><button>Add another?</button></Link>
        </form>
    </div>
  )
}

export default NewSandwich