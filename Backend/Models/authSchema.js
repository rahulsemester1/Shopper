import mongoose from "mongoose"
import { type } from "os"
const authSchema=new mongoose.Schema({
     name:{
      type:String,
     },
     email:{
      type:String,
      unique:true,
     },
     password:{
      type:String,
     },
     cartData:{
      type:Object,
     },
     Date:{
      type:Date,
      default:Date.now()
     },
})

const AuthModel=mongoose.model("authModel",authSchema);
export default AuthModel
