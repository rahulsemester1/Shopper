import React,{useContext} from 'react'
import Item from "../Item/Item"
import "./Popular.css"
import data_product from "../../assets/data"
import { ShopContext } from '../../Context/ShopContext'

function Popular() {
    const {all_product}=useContext(ShopContext)
    const new_collections=all_product.slice(-8);
    let newProduct=all_product.filter(item=>item.category==="men").slice(-6)
         
    
   
    
  return ( 
    <div className='popular'>
      <h1>POPULAR IN MEN</h1>
      <hr/>
      <div className="popular-item">
         {newProduct.map((item,i)=>{
            //return <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            return <Item key={i} props={item}/>
         })}
      </div>
    </div>
  )
}

export default Popular