import React from 'react'
import Navbar from '../components/Navbar'
import QuotesAPI from '../services/QuotesAPI'
const Homepage = () => {
  object.onmouseover = function(){myScript};

  
  return (
    <div> 
      <Navbar/>
      <div className="container"> 
        <h1>No one walks alone!</h1>
          <h6>Whether you're homeless, a victom of crime, misfortune, or abuse, whether you struggle with alchol or narcotics, know that you are not alone!
            here you will find both friends and resources to help get you back on track. <span style={{color:"blue"}}>  YOU ARE LOVED!</span>
          </h6>
        <div className='quote_borders'> 
        <QuotesAPI/>
        </div> 
        <h2 className='center_text'>resources for homeless</h2>
          <div className='row'> 
            <div className='column' > 
              <h1>substance related</h1>
              <h1>Whether you're homeless, a victom of crime, misfortune, or abuse, whether you struggle with alchol or narcotics, know that you are not alone!
            here you will find both friends and resources to help get you back on track</h1>
            </div>
            <div className='column'> 
              <h1>abuse related</h1>
              <h1>Whether you're homeless, a victom of crime, misfortune, or abuse, whether you struggle with alchol or narcotics, know that you are not alone!
            here you will find both friends and resources to help get you back on track</h1>
            </div> 
            <div className='column'> 
              <h1>shelters</h1>
              <h1>Whether you're homeless, a victom of crime, misfortune, or abuse, whether you struggle with alchol or narcotics, know that you are not alone!
            here you will find both friends and resources to help get you back on track</h1>
            </div> 
          </div> 
      </div> 
    </div> 
  )
}

export default Homepage