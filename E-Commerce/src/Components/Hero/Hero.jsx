import React,{useContext} from 'react'
import hand_icon from "../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow.png"
import hero_image from "../../assets/hero_image.png"
import { ShopContext } from '../../Context/ShopContext';
 
import "./Hero.css";

function Hero() {
  let {name}=useContext(ShopContext);
  return (
    <div className='hero'>
    
      <div className="hero-left">
      
          
          {localStorage.getItem("authToken")? <p style={{fontSize:18}}>Welcome:{name}</p>:""}

         <h2>NEW ARRIVALS ONLY</h2>
         <div>
           <div className="hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=""/>
           </div>
         <p>collections</p>
         <p>for everyone</p>
         </div>
         <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} />
         </div>
      </div>

      <div className="hero-right">
      <img src={hero_image} />
      </div>
    </div>
  )
}

export default Hero