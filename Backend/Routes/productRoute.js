import express from "express"

import { uploadImage,addProduct,deleteProduct,allProducts,addCart,removecart,getCart} from "../Controller/productInfo.js";
import jwtMiddleware from "../Middleware/Middleware.js";
import upload from "../utils/multer.js";

const router=express.Router();


//Routes
router.post("/upload",upload.single("product"),uploadImage)     //upload image route
router.post("/add",addProduct)                                 //add new user route
router.delete("/delete",deleteProduct)                         
router.get("/products",allProducts)   
router.post("/cart",jwtMiddleware,addCart)                    //Adding data to cart as well from db
router.post("/removecart",jwtMiddleware,removecart)            //Removing data from cart as well from db
router.post("/getcart",jwtMiddleware,getCart)            //getting cart value
//router.get("/list",productList)                              // contains all product list(men,Women,kids)
 


export default router