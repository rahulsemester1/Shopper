import React,{useState,useContext} from 'react'
// import {useLocation} from "react-router-dom"

import Hero from "../Components/Hero/Hero"
import Popular from '../Components/Popular/Popular'
import Offers from "../Components/Offers/Offers"
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

import { ShopContext } from '../Context/ShopContext';
import { useLocation } from 'react-router-dom'


function Shop() {
  let location=useLocation();
  let {setAuth}=useContext(ShopContext);

  if(localStorage.getItem("authToken")){
    setAuth(true)
  }
  // if(localStorage.getItem("authToken")&&(location.state?.message==="login")){
  //   setAuth(true)
  // }

  return (
    <div>
      {/* {<p>Welcome:{name}</p>} */}
      <Hero/>
       <NewCollections/> 
      <Offers/>
      <Popular/>  
       <NewsLetter/>        
    </div>
  )
}

export default Shop