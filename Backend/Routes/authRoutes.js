import express from "express"

import {signUpAuth,loginAuth} from "../Controller/authController.js"

const router=express.Router();

//Routes
router.post("/signup",signUpAuth);
router.post("/login",loginAuth)


export default router