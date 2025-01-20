import multer from "multer";
import path from "path";

//Image Storage
const storage=multer.diskStorage({
   
   destination:"./images",

   filename:function(req,file,cb){
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
   }
})
const upload=multer({storage})
export default upload;