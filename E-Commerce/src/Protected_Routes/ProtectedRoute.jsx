import React,{useState} from 'react'

import LoginSignup from '../Pages/LoginSignup';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

  let token=localStorage.getItem("authToken");
  if(token){
   return <Navigate to="/"/>
  }
  else{
    return children
  }
}

export default ProtectedRoute