import React from 'react'
import Navbar from '../components/Navbar'
import MotivationalQuote from '../components/MotivationalQuote'
const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1>No one walks alone!</h1>
            <h6>Whether you're homeless, a victom of crime, misfortune, or abuse, whether you struggle with alchol or narcotics, know that you are not alone!
                here you will find both friends and resources to help get you back on track. <span color='blue'>  YOU ARE LOVED!</span>
            </h6>

        <div>
        <MotivationalQuote/>

        </div>
             <h5>resources for homeless</h5>
             
        </div>

    </div>
  )
}

export default Homepage