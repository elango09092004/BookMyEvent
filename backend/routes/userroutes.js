const express=require("express")
const router=express.Router()
const usercontroller=require("../controllers/usercontroller")
const signincontroller=require("../controllers/signincontroller")

router.post("/",usercontroller.signup);
router.post("/signin",signincontroller.signin)

module.exports=router;