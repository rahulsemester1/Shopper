import React,{createContext, useEffect, useState} from 'react'
import axios from "axios"



const getDefaultCart=()=>{
  let cart={};
  for(let index=1;index<=300;index++){
    cart[index]=0;
  }
  return cart;
}

export const ShopContext=createContext(); 

export default function ShopContextProvider({children}) {
  
 let [cartItems,setcartItems]=useState(getDefaultCart())
 let [name,setName]=useState()
 let [all_product,setall_product]=useState([])
 let [loading,setLoading]=useState(true)
 let [auth,setAuth]=useState(false)


const getCart=async()=>{
  const token=localStorage.getItem("authToken")
  if(localStorage.getItem("authToken")){
  const response=await axios.post("http://localhost:4000/api/v1/users/getcart",{},{
    headers:{
     "authorization":`${token}`,
     "content-type":"application/json",
    },
 })
 if(response){
  console.log(response.data)
   setcartItems(response.data)
 }else{
   console.log("error while getting data from cartCart")
}
}else{
  setcartItems(getDefaultCart())
 }
}


//api call to display all products
 const apiCall=async()=>{      
  try{
  const response=await axios("http://localhost:4000/api/v1/users/products");
  console.log(response.data.data)
  if(response){
    setall_product(response.data.data)
   }
  }catch(error){
    console.log("Error apiCall",error)
  }finally{
    setLoading(false)
  }
} 


useEffect(()=>{
  apiCall(); 
},[])

//2nd
useEffect(()=>{
  getCart()
},[auth])

const addToCart=async(itemId)=>{
  console.log(itemId)
  setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  let token=localStorage.getItem("authToken")
  if(token){
    let response=await axios.post("http://localhost:4000/api/v1/users/cart",{itemId:itemId},{
       headers:{
        "authorization":`${token}`,
        "content-type":"application/json",
       },
    })
    if(response){
     console.log(response.data) 
    }else{console.log("error while addToCart")}
  }
 }

const getCartTotal=()=>{  
  let totalAmt=0;
  for(let item of Object.keys(cartItems)){
    if(cartItems[item]>0){
      let iteminfo=all_product.find((val)=>val.id===Number(item));
      totalAmt+=iteminfo.new_price*cartItems[item];
      }
    }
      return totalAmt;
}


const removeFromCart=async(itemId)=>{
  setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  let token=localStorage.getItem("authToken")
  if(token){
    const response=await axios.post("http://localhost:4000/api/v1/users/removecart",{itemId:itemId},{
       headers:{
        "authorization":`${token}`,
        "content-type":"application/json",
       },
    })
    if(response){
     console.log(response.data) 
    }else{console.log("error while removeToCart")}
  }  
}

if(loading){
  return <div>...Loading</div> 
}
 
return (  

   <ShopContext.Provider value={{getCartTotal,all_product,cartItems,setcartItems,addToCart,removeFromCart,auth,setAuth,name,setName}} >
      {children}
   </ShopContext.Provider>
  )
}


