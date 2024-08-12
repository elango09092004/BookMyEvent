const express=require("express")
const router=express.Router()
const bookingscontroller=require("../controllers/bookingscontroller")

router.post("/",bookingscontroller.addbooking)

module.exports=router