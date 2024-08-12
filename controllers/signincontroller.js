const usermodel =require("../models/usermodel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signin=async(req,res)=>{
    try{
        const {email,password}=req.body
        const user = await usermodel.findOne({email})
        if(!user)
        {
            return res.status(400).json("usernot found")
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json("invalid password")
        }
        const token=jwt.sign({userid:user._id},"secret_token",{expiresIn:"7h"})
        res.status(200).json(token);
    }catch(err){
        res.status(500).json(err)
    }
}