import mongoose from "mongoose"
import express from "express"

import Product from "../Models/schema.js"
import data from "../../E-Commerce/src/assets/all_product.js"


//Connection to MongoDB 
mongoose.connect("mongodb+srv://rahulsharmachd25:rarashna5@cluster420.i55hr.mongodb.net/E-Commerce");


const initDb=async()=>{
   await Product.insertMany(data);
}

initDb();