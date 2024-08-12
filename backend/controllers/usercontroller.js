const express=require("express")
const usermodel=require("../models/usermodel")

exports.signup=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body
        const user=await usermodel.findOne(email);
        if(user){
            return res.status(400).json({message:"Email already exists"})
        }
        const newuser=await usermodel.create({name,email,password,role})
        res.status(201).json({message:"User created successfully",newuser})
        newuser.save();
    }
    catch(e){
        console.log(e)
    }
}