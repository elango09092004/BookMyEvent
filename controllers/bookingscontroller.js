const bookingmodel=require("../models/bookingmodel")
const {v4:uuidv4}=require("uuid")


exports.addbooking=async(req,res)=>{
    try{
        const {event,user,bookingdate}=req.body;
        const newbooking =new bookingmodel({
            bookingid:uuidv4(),
            event,
            user,
            bookingdate
        })
        await newbooking.save();
        res.json(newbooking)
        // console.log(newbooking);
    }catch(err){
        res.json(err)
    }
}