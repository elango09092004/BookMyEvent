const express=require("express")
const router=express.Router()
const eventcontroller=require("../controllers/eventcontroller")


router.post("/",eventcontroller.addEvent)

module.exports=router