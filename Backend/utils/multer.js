import { CloudinaryStorage } from 'multer-storage-cloudinary'; 
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name:"dzagotnbp",
    api_key:759345351841677,
    api_secret:"uQKR20I5293ZlHXvMQ5LzgT4ciw"
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'Shopper',
      allowedFormats:["png","jpg","jpeg","avif"] ,     // supports promises as well
      
    },
  });

 export {cloudinary,storage}



// import multer from "multer";
// import path from "path";

// //Image Storage
// const storage=multer.diskStorage({
   
//    destination:"./images",

//    filename:function(req,file,cb){
//       return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//    }
// })
// const upload=multer({storage})
// export default upload;
