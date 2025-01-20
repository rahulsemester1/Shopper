import React from 'react'
import "./BreadCrums.css"
import arrow_icon from "../../assets/breadcrum_arrow.png" 

function BreadCrums({product}) {
  return (
    <div className='breadcrums'>
      HOME<img src={arrow_icon} />SHOP<img src={arrow_icon} />{product.category}<img src={arrow_icon} />{product.name}
    </div>
  )
}

export default BreadCrums