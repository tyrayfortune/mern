import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const QuotesAPI = () => {

    const [quote, setQuote] = useState([])

    
    useEffect(() => {
        Axios.get("https://type.fit/api/quotes").then(
            (response) => {
                console.log(response)
                setQuote(response.data.text)
            }
        )
    }, [])

    // const getQuote = () =>{
    // }



  return (
    <div>
        <h1>get motivated</h1>
        <button  >Get Motivated</button>
        <h1>will display here: {quote}</h1>

    </div>
  )
}

export default QuotesAPI