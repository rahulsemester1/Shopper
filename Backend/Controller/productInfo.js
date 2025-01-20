import AuthModel from "../Models/authSchema.js";
import Product from "../Models/schema.js"

//upload file
let uploadImage=(req,res)=>{
   res.json({
      success:1,
      imageUrl:`http://localhost:4000/images/${req.file.filename}`,
   })
}

//adding user
let addProduct=async(req,res)=>{
   let id;
   let product=await Product.find({});
   if(product.length>1){
      let last_product=product.slice(-1);
      let last_one=last_product[0];
      id=last_one.id+1;
   }
   else{
      id=1
   } 
   try{
   let data=req.body;
   const product=new Product({
     id:id,
     name:data.name,
     image:data.image,
     category:data.category,
     new_price:data.new_price,
     old_price:data.old_price,    
     date:data.date,
     available:data.available,
   })
      console.log(product);
      await product.save();
      console.log("saved");
      res.status(200).json({
         success:true,
         name:data.name,
   })
   }catch(error){
      res.status(401).json({
      success:false,
      error:error.message
   })
  }
}

//user deletion
let deleteProduct=async(req,res)=>{
   let data=req.body;
   try{
       let deleteditem=await Product.findOneAndDelete({id:data.id})
         if(deleteditem){
            console.log(deleteditem);
            console.log("removed")
            res.status(200).json({
                 success:true,
                 message:"Product deleted successfully.",
                 data:{
                  name:data.name,
               }
            })
         }else{
            console.log("no product is found with given id")
         }
      }catch(error){
         console.log("Error deleting the product"+error.message);
          res.status(401).json({
            success:false,
            error:error.message
         })          
   }
}

//Show all products
let allProducts=async(req,res)=>{
   try{
      let products=await Product.find({})
      if(products){
         res.status(200).json({
             data:products,
             success:true,
         })
      }
   else{
         console.log("No product is available to show!")
      }
   }catch(error){
      res.status(404).json({
      })
   }
}

//Adding product to cart
const addCart=async(req,res)=>{
   console.log("Added user",req.user)
   const user=await AuthModel.findOne({_id:req.user});
   user.cartData[req.body.itemId]+=1;
   await AuthModel.findOneAndUpdate({_id:req.user},{cartData:user.cartData})   //save it into(updated) Db
   res.send("Added");
}

//Removing Product from Cart
const removecart=async(req,res)=>{
   console.log("Removed",req.user)
   const user=await AuthModel.findOne({_id:req.user});
   if( user.cartData[req.body.itemId]>0)
      {
         user.cartData[req.body.itemId]-=1;
         await AuthModel.findOneAndUpdate({_id:req.user},{cartData:user.cartData})   //reflecting back remove op in db
         res.send("Removed");
     }
}

const getCart=async(req,res)=>{
   const user=await AuthModel.findOne({_id:req.user});
   res.json(user.cartData)
}


export {uploadImage,addProduct,deleteProduct,allProducts,addCart,removecart,getCart}

