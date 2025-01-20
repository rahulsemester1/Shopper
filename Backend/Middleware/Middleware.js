import express from "express"
import jwt from "jsonwebtoken"

const jwtMiddleware=async(req,res,next)=>{
    let token=req.headers.authorization;
    if(!token){
      res.status(401).send({error:"Please authenticate first"})
    }
    else{
      try{
      const data=jwt.verify(token,"rarashna5");
      req.user=data.user;
      next();
      }catch(error){
       res.status(401).send({error:"Please authenticate as toekn is wrong"})
      }
    }
}

export default jwtMiddleware