const jwt =require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.header("Authorization")?.split(" ")[1]
    if(!token)
         return res.status(401).send("Access denied. No token provided.")
    try{
        const decodedterm=jwt.verify(token,"secret_token")
        req.user=decodedterm
        next()
    }catch{
        res.status(400).send("Invalid token")
    }
}
module.exports=auth