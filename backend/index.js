const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors()); 
const userroutes=require("./routes/userroutes")

mongoose.connect("mongodb://localhost:27017/bookMyEvent")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error('Could not connect to MongoDB... ', err));

    app.use("/signup",userroutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
