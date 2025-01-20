import jwt from "jsonwebtoken"

import AuthModel from "../Models/authSchema.js"

//signup and token creation
const signUpAuth=async(req,res)=>{
   try{
   const data=req.body;
   const response=await AuthModel.findOne({email:data.email});
   if(response){
      return res.status(400).json({Success:false,error:"Existing user"})
   }

   let cart={}                                 //creation of empty cart 
   for (let i = 0; i < 300; i++) {
      cart[i] = 0;  
   }

   const authModel=new AuthModel({                     //new user creation(signup)
      name:data.name,
      email:data.email,
      password:data.password,
      cartData:cart,
   })

   await authModel.save();

   const payload={
      user:authModel.id,
   }

   const token=jwt.sign(payload,"rarashna5");             //token creation
   res.json({
      success:true,
      token,
      data:data.name,
      
      
   })
}catch(error){
   console.log("Error while adding new user",error)
 }
}

//Login
const loginAuth=async(req,res)=>{
   const data=req.body;
   const response=await AuthModel.findOne({email:data.email});
   if(response){
      const verifiedUser=data.password===response.password;
      if(verifiedUser){

         const payload={
            user:response.id,               
            }
            
         const token=jwt.sign(payload,"rarashna5");
         res.json({
            success:true,
            token,
            response:response.name,
         })
      }else{
         res.json({success:false,error:"Wrong Password"})
      }
   }else{
      res.json({success:false,errors:"Wrong Email"})
   }
}

export {signUpAuth,loginAuth}

