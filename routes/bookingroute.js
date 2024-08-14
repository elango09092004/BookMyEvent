const express=require("express")
const router=express.Router()
const bookingscontroller=require("../controllers/bookingscontroller")

router.post("/",bookingscontroller.addBooking)
router.get("/",bookingscontroller.getBookings)

module.exports=router