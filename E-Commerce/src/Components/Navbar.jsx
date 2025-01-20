import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import {Link,NavLink,useNavigate} from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';
import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {
   let navigate=useNavigate();
   let {name,cartItems,setcartItems,setAuth}=useContext(ShopContext);
   const [hambuger,setHamburger]=useState(false);

   const getNavLinkStyle=({isActive})=>{
      return{
         color:isActive?"red":"black",
         textDecoration:isActive?"underline":"none",
      }
   }

let getTotalQuantity=()=>{
   let quantity=0;
   for(let item in cartItems){
      if(cartItems[item]>0){
         quantity+=cartItems[item]
      }
   }  
      return quantity;
   }


  return (
    <div className="navbar">
      <div className="nav-logo" onClick={()=>navigate("/")}>
         <img  src={logo} alt=""/>
         <p >SHOPPER</p> 
    
      </div>   

      <div className={`nav-menu${hambuger?'-open ':''}`}>
         <NavLink to="/" className="nav-menu-link" style={getNavLinkStyle}>Shop</NavLink>
         <NavLink to="/mens" className="nav-menu-link" style={getNavLinkStyle}>Men</NavLink>
         <NavLink to="/womens" className="nav-menu-link" style={getNavLinkStyle}>Women</NavLink>
         <NavLink to="/kids" className="nav-menu-link" style={getNavLinkStyle}>Kids</NavLink>
      </div>
                
        <div className={`nav-login-cart`}>
         {localStorage.getItem("authToken")?
         <button onClick={()=>{
            localStorage.removeItem("authToken");
            setAuth(false);
            navigate("/")}}>
               Logout
               </button>:
         <NavLink to="/login"><button>Login</button></NavLink>}
    
         {/* {isAuthenticated? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button></li> :  <li> <button onClick={() => loginWithRedirect()}>Login</button></li> }  */}
        
        {/* {isAuthenticated? <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button></li> :  <li> <button onClick={() => loginWithRedirect()}>Login</button></li> } 
      */}
       <NavLink to="/cart"> <img src={cart_icon}  /> </NavLink> 
       {/* <div className="nav-cart-count" onClick={()=>{getTotalQuantity()}}>0</div> */}
      <div className="nav-cart-count" >{getTotalQuantity()}  </div>
      <div className='ham' onClick={()=>{setHamburger(!hambuger)}}><MenuIcon/></div>
       
      </div>
    </div>
  )
}

export default Navbar