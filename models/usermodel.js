const mongoose =require("mongoose")
const bcrypt = require("bcrypt")

const user=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true,default:"user"},

})


user.pre("save",async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()

    
})
module.exports=mongoose.model("user",user);