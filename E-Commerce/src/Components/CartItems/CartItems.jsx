import React,{useContext} from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../../assets/cart_cross_icon.png"



function CartItems() {
   const {getCartTotal,all_product,cartItems,removeFromCart}=useContext(ShopContext)

   localStorage.setItem("cart", JSON.stringify(cartItems));
   let val1=JSON.parse(localStorage.getItem("cart"));
   let cartProducts={};

   for(let data in val1){
      if(val1[data]>0){
         if(data===all_product.id){
          console.log(all_product.id);
         }
      }
      // console.log(cartProducts);
   }
   // if(Object.keys(data)>0){
   //       if(Object.values(data)===all_product.id){
   //          cartProducts=all_product;
   //       }
   // }
  
   
  return (

    <div className='cartItems'>
      <div className="cartitems-format-main">
         <p>Products</p>
         <p>Title</p>
         <p>Price</p>
         <p>Quantity</p>
         <p>Total</p>
         <p>Remove</p>
      </div>
      <hr/>
      {  
        all_product.map((val)=>{
         if(val1[val.id]>0){
            return(
               <div>
                 <div className="cartitems-format cartitems-format-main">
                 <img src={val.image} className='cartitems-product-icon'/>
                 <p>{val.name}</p>
                 <p>${val.new_price}</p>
                 <button className='cartitems-quantity'>{cartItems[val.id]}</button>
                 <p>${val.new_price*cartItems[val.id]}</p>
                 <img src={remove_icon} class="cartitems-remove-icon" onClick={()=>removeFromCart(val.id)}/>
               </div>
            <hr/>
            </div>
            )
         }
      })}

      <div className='cartiitems-down' >
         <div className="cartiitems-total">
            <h1>Cart Total</h1>
               <div>
                  <div className="cartitems-total-item">
                     <p>Subtotal</p>
                     <p>${getCartTotal()}</p>
                  </div>
                  <hr/>
                  <div className="cartitems-total-item">
                     <p>Shipping Fee</p>
                     <p>Free</p>
                  </div>
                  <hr/>
                  <div className="cartitems-total-item">
                     <h3>Total</h3>
                     <h3>${getCartTotal()}</h3>

                  </div>
               </div>
            <button className='cartitem-button'>PROCEED TO CHECKOUT</button>
         </div>
         <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
               <input type="text" placeholder='Promo code'/>
               <button>Submit</button>
            </div>
         </div>
   </div>
 </div>
   
  )
}

export default CartItems









// import React,{useContext} from 'react'
// import "./CartItems.css"
// import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from "../../assets/cart_cross_icon.png"



// function CartItems() {
//    const {getCartTotal,all_product,cartItems,removeFromCart}=useContext(ShopContext)
//   return (

//     <div className='cartItems'>
//       <div className="cartitems-format-main">
//          <p>Products</p>
//          <p>Title</p>
//          <p>Price</p>
//          <p>Quantity</p>
//          <p>Total</p>
//          <p>Remove</p>
//       </div>
//       <hr/>
//       {all_product.map((val)=>{
//          if(cartItems[val.id]>0){
//             return(
//                <div>
//                  <div className="cartitems-format cartitems-format-main">
//                  <img src={val.image} className='cartitems-product-icon'/>
//                  <p>{val.name}</p>
//                  <p>${val.new_price}</p>
//                  <button className='cartitems-quantity'>{cartItems[val.id]}</button>
//                  <p>${val.new_price*cartItems[val.id]}</p>
//                  <img src={remove_icon} class="cartitems-remove-icon" onClick={()=>removeFromCart(val.id)}/>
//                </div>
//             <hr/>
//             </div>
//             )
//          }
//       })}

//       <div className='cartiitems-down' >
//          <div className="cartiitems-total">
//             <h1>Cart Total</h1>
//                <div>
//                   <div className="cartitems-total-item">
//                      <p>Subtotal</p>
//                      <p>${getCartTotal()}</p>
//                   </div>
//                   <hr/>
//                   <div className="cartitems-total-item">
//                      <p>Shipping Fee</p>
//                      <p>Free</p>
//                   </div>
//                   <hr/>
//                   <div className="cartitems-total-item">
//                      <h3>Total</h3>
//                      <h3>${getCartTotal()}</h3>

//                   </div>
//                </div>
//             <button className='cartitem-button'>PROCEED TO CHECKOUT</button>
//          </div>
//          <div className="cartitems-promocode">
//             <p>If you have a promo code, Enter it here</p>
//             <div className="cartitems-promobox">
//                <input type="text" placeholder='Promo code'/>
//                <button>Submit</button>
//             </div>
//          </div>
//    </div>
//  </div>
   
//   )
// }

// export default CartItems