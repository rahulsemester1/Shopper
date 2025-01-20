import React from 'react'
import { Link } from 'react-router-dom'

import add_product_icon from "../assets/Product_Cart.svg"
import list_product_icon from "../assets/Product_list_icon.svg"

const Sidebar = () => {
  return (
    <div className='w-full flex justify-center  sm:h-auto sm:w-full sm:flex sm:justify-center  md:w-[180px] m  md:min-h-screen md:flex-col md:justify-start lg:w-[200px]   bg-white '>
      <Link to={"/addproduct"}>
       <div className='flex m-4 bg-[#ebebed] p-4 md:m-2 lg-m-4'>
      
          <img src={add_product_icon} className='pr-2'/>
          <p>Add Product</p>
     
      </div> 
      </Link>
      <Link to={"/listproduct"}>
      <div className=' flex m-4 bg-[#ebebed] p-4 md:m-2 lg-m-4'>
        
           <img src={list_product_icon} className='pr-2'/> 
          <p>Product List</p>
       
      
      </div></Link>
    </div>
  )
}

export default Sidebar