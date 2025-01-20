import React,{useEffect, useState} from 'react'

import axios from "axios";

import cross_icon from "../assets/cross_icon.png"

const ListProduct = () => {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)

  const fetchData=async()=>{
    try{
      const response=await axios.get("http://localhost:4000/api/v1/users/products")
      setProducts(response.data.data)
      
    }catch(error){
      console.log("error",error);
      
    }
    finally{
      setLoading(false)
    }
   
  }

  useEffect(()=>{
 
     fetchData(); 
    //  console.log(products)
  },[])


  const delete_product=async(id)=>{
    try{
      const response=await axios.delete("http://localhost:4000/api/v1/users/delete",{
      data:{id}  
   })
      console.log("Item Deleted");     
      await fetchData();            //updated data after deletion
  }catch(error){
      console.log("Deletion error",error);
  }
}
  
if(loading){
  return <div>...Loading</div>
}

  return (
    <div className='bg-white mt-5 p-4  sm:w-[600px] md:w-[75%] lg:w-[80%] text-center mx-auto'> 
      <p className='text-3xl font-semibold mb-8 text-center'>All Products List</p>
      <div className='grid grid-cols-6 mb-6  '>
        <p className='text-md font-semibold'>Products</p>
        <p className='text-md font-semibold'>Title</p>
        <p className='text-md font-semibold'>Old Price</p>
        <p className='text-md font-semibold'>New Price</p>
        <p className='text-md font-semibold'>Category</p>
        <p className='text-md font-semibold'>Remove</p>
      </div>

      <div className='h-[450px] overflow-y-auto '>
 {
  products.map((pr,index)=>{
      return <div key={index} className='grid grid-cols-6 gap-10 pl-8  '>
        <img className="w-28" src={pr.image}/>
          <p>{pr.name}</p>       
          <p>{pr.old_price}</p>
          <p>{pr.new_price}</p>
          <p>{pr.category}</p>
          <img onClick={()=>delete_product(pr.id)} src={cross_icon} className='cursor-pointer w-5'/>
          <div className='border-b-2 border-gray-400 '></div>
      </div>
    }
  )
}
</div>
    
     
     
    </div>
  )
}

export default ListProduct