import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Dasbhoard = () => {
  return (
<div class="container">
  <div class="row align-items-start">
    <div  class="col">
        <Link to="new/sandwich"><button>Create New Sandwich</button></Link>
        <div class="container-sm">100%</div>
      </div>
      <div class="col">
      <button>Order my Favorite</button>
        <div>

        </div>
      </div>
      <div class="col">
      <button>Suprise Me</button>
        <div>
        </div>
    </div>
    
  </div>


</div>
  )
}

export default Dasbhoard