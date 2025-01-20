import React,{useState,useContext} from 'react'

import {useNavigate} from "react-router-dom"
import axios from "axios";

import { ShopContext } from '../Context/ShopContext.jsx'


import "../CSS/LoginSignup.css" 

function LoginSignup() {
  const navigate=useNavigate();
  const [state,setState]=useState("Login")
  const {name,setName}=useContext(ShopContext)
  
  const [userInfo,setuserInfo]=useState({
    name:"",
    email:"",
    password:"",
  })

  const handleChange=(e)=>{
    setuserInfo({...userInfo,[e.target.name]:e.target.value}) 
  }


   //signup
  const signup=async()=>{
    try{
    console.log("signup",userInfo);
    const response=await axios.post("http://localhost:4000/api/v1/auth/signup",userInfo) 
    if(response?.data.success===true){
      alert("Signup Successfully")
      console.log(response)
      setName(response.data.data)
      localStorage.setItem("authToken",response?.data.token)
      navigate("/",{state:{message:"signup"}});
    }
    else{
      console.log("Cannot get response",response.data.error)
    }
  }catch(error){
    console.log("Error",error)
  }
  }

  //Login
  const login=async()=>{
    try{
      const response=await axios.post("http://localhost:4000/api/v1/auth/login",userInfo) 
      if(response?.data.success===true){
        alert("Login Successfully")
        setName(response.data.response);
        console.log(response)
        localStorage.setItem("authToken",response?.data.token)
        navigate("/",{state:{message:name}});
      }
      else{
       alert(response.data.error)
        // console.log(response.data.error)
     
      }
    }catch(error){
      console.log("Error",error)
    }
   }

  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Login"?<></>:<input type="text" onChange={handleChange} placeholder="Your Name" name="name" />}
          <input type="email" placeholder="Email Address" onChange={handleChange} name="email" value={userInfo.email}/>
          <input type="password" placeholder="Password" onChange={handleChange} name="password" value={userInfo.password}/>
        </div>
        <button onClick={state==="Login"?login:signup}>Continue</button>
       {state==="Login"?  
       <p className="loginsignup-login">Create an account?<span onClick={()=>setState("Signup")}>Sign Up</span></p>
       :<p className="loginsignup-login">Already have an account?<span onClick={()=> setState("Login")}>Login here</span></p>} 
       
         <div className="loginsignup-agree">
          <input type="checkbox" name=" " id=""/>
          <p style={{fontSize:'15px'}}>By continuing,i agree to terms of use & privacy policy.</p>
         </div>
      </div>
    </div>
  )
}

export default LoginSignup