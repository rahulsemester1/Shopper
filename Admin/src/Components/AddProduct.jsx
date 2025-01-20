import React,{useState} from 'react'

import axios from "axios"

import upload_area from "../assets/upload_area.svg"

const AddProduct = () => {
    const [image,setImage]=useState(false);
    const [product_detail,setProduct_detail]=useState({
      category:"women",
      image:"",
      name:"",
      old_price:"",
      new_price:"",
   })

   const addProductValue=(e)=>{
      setProduct_detail({...product_detail,[e.target.name]:e.target.value})
  }

   const handleFile=(e)=>{
      setImage(e.target.files[0])
      console.log(e.target.files[0]);
   }

   const submitProductVal=async()=>{
      console.log(product_detail)
      let formData=new FormData();
      formData.append("product",image);
      try{
      const response=await axios.post("http://localhost:4000/api/v1/upload",formData,
      //   { 
      //    headers:{
      //        'Content-Type': 'multipart/form-data',
         
      //    }
      // }
   )

      if(response){
         product_detail.image=response.data.imageUrl;
         const apiData=await axios.post("http://localhost:4000/api/v1/users/add",product_detail)
         apiData?alert("Product added"):alert("Failed");
           
               setProduct_detail({
               category:"women",
               image:upload_area,
               name:"",
               old_price:"",
               new_price:"",
            });
          
        
      }else{
         console.log("Didn't get any response from backend")
      }
   }catch(error){
      console.log("Upload failer",error)
    }
   }
   
  return (
    <div className='bg-white m-3 border-2 rounded-lg md:w-[530px] lg:w-[640px] flex flex-col  text-lg mx-auto p-16'>
      <div className="addproduct-itemfiled  m-2">
         <p className='mb-3'>Product Title</p>
         <input text="text" name="name" value={product_detail.name} onChange={addProductValue} placeholder='Type here' className='border-2 w-[380px] sm:w-[520px] md:w-[400px] lg:w-[505px]  rounded-lg p-2 '></input>
      </div>
      <div className='flex-wrap justify-between sm:flex-wrap md:flex'>
            <div className="addproduct-price">
               <p className='m-2'>Price</p>
               <input text="text" name="old_price" onChange={addProductValue} value={product_detail.old_price} placeholder='Type here' className=' border-2 rounded-lg w-[380px]  sm:w-[520px] md:w-[180px] lg:w-[250px] p-2'></input>
            </div>
            <div className="addproduct-price">
               <p className='m-2'>Offer Price</p>
               <input text="text" name="new_price" onChange={addProductValue} value={product_detail.new_price} placeholder='Type here' className=' border-2 rounded-lg w-[380px]  sm:w-[520px] md:w-[180px]  lg:w-[250px] p-2'></input>
            </div>
      </div>

      <div>
      <p className='ml-2 mt-4'>Product Category</p>
         <select name="category" onChange={addProductValue} value={product_detail.category} className='m-2 border-2 rounded-md h-12 w-28'>
            <option value="women">Women</option>
            <option value="men">men</option>
            <option value="kid">kid</option>
         </select> 
      </div>

      <div>
         <label htmlFor='fileInput' >
            <img src={image?URL.createObjectURL(image):upload_area} value={upload_area} className='m-2 w-28'/>
         </label>
         <input type="file" onChange={handleFile} name="image" id="fileInput" hidden/>
      </div>

      <div>  
       <button 
         type="button" 
         onClick={submitProductVal} 
         className='bg-blue-600 border-1 rounded-md ml-2 mt-6 w-[150px] h-[40px] text-white'>
            Add
       </button>
      </div>
    </div>
  )
}

export default AddProduct