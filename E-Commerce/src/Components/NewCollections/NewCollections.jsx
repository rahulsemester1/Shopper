import React,{useContext} from 'react'

import { ShopContext } from '../../Context/ShopContext'

import Item from "../Item/Item";
// import new_collections from '../../assets/new_collections';
import "./NewCollections.css";
// import { allProducts } from '../../../../Backend/Controller/productInfo';

function NewCollections() {
  const {all_product}=useContext(ShopContext)
  const new_collections=all_product.slice(-8);
  
  
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
         {new_collections.map((item,i)=>{
           // return <Item key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           return <Item key={i} props={item}/>
         })}
      </div>

    </div>
  )
}

export default NewCollections