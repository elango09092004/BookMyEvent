const express=require("express")
const router=express.Router()
const usercontroller=require("../controllers/usercontroller")

router.post("/",usercontroller.signup);

module.exports=router;