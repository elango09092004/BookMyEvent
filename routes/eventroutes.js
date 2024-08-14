const express=require("express")
const router=express.Router()
const eventcontroller=require("../controllers/eventcontroller")


router.post("/",eventcontroller.addEvent)
router.get("/",eventcontroller.getEvents)

module.exports=router