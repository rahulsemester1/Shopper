import React from 'react'
import exclusive_image from "../../assets/exclusive_image.png"

import "./offers.css"

function Offers() {
  return (
    <div className='offers'>
      <div className="offers-left">
         <h1>Exclusive</h1>
         <h1>Offers for you</h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <button>Check Now</button>
      </div>
      <div className="offers-right">
         <img src={exclusive_image}/>
      </div>
    </div>
  )
}

export default Offers