const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors()); 

//routes
const userroutes=require("./routes/userroutes")
const eventroutes=require("./routes/eventroutes")
const bookingroutes=require("./routes/bookingroute")

//mongodb connection
mongoose.connect("mongodb+srv://elango:e-commerce@cluster0.mll0g.mongodb.net/e-commerce")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error('Could not connect to MongoDB... ', err));

    app.use("/signup",userroutes);
    app.use("/event",eventroutes);
    app.use("/bookings",bookingroutes)





app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
