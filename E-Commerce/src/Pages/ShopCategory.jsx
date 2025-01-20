import React,{useContext} from 'react'
import {ShopContext} from "../Context/ShopContext"
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from "../Components/Item/Item"

import "../CSS/ShopCategory.css" 



function ShopCategory({banner,category}) {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={banner}/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} />
        </div>
      </div>
      <div className="shopcategory-products">
        { all_product.map((item,i)=>{
          if(category===item.category)
            { 
              //return <Item key={i} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />
               return <Item key={i} props={item}/>
        }
        else{
          return null;
        }
              })}
      </div>
    </div>
  )
}

export default ShopCategory