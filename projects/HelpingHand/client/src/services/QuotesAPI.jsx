import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const QuotesAPI = (props) => {

    const [quote, setQuote] = useState([])


    useEffect(() => {
        Axios.get("https://type.fit/api/quotes").then(
            (response) => {
                // console.log(response)
                const oneQuote = response.data[Math.floor(Math.random()*response.data.length)].text +  " -- Author -- " + response.data[Math.floor(Math.random()*response.data.length)].author
                console.log(oneQuote)
                setQuote(oneQuote)
                
            }
        )
    }, [])

    const newQuote = () =>{
        Axios.get("https://type.fit/api/quotes").then(
            (response) => {
                const oneQuote = response.data[Math.floor(Math.random()*response.data.length)].text + " -- Author -- " + response.data[Math.floor(Math.random()*response.data.length)].author
                console.log(oneQuote)
                setQuote(oneQuote)
                
            }
        )
    }


  return (
    <div>
        <div>
            <h5>{quote}</h5>
        </div>
        <div>
            <button onClick={newQuote} >Get Motivated</button>
        </div>
    </div>
  )
}

export default QuotesAPI