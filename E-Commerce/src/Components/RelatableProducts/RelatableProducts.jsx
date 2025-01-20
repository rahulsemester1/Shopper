import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'
import "./RelatableProducts.css"

function RelatableProducts({category}) {
   
  return (
   
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
         {data_product.map((item,index)=>{
            return <Item key={index} props={item} category={category}/>
         })}
      </div>
    </div>
  )
}

export default RelatableProducts