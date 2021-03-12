const jwt= require("jsonwebtoken")
const Register=require("../models/registers")
const auth =async (req,res,next)=>{
    try {
        const token= req.cookies.jwtlogin;
        const verifyUSer=jwt.verify(token,process.env.SECRET_KEY)
        const user=await Register.findOne({_id:verifyUSer._id})
        req.token=token
        req.user=user
        console.log(verifyUSer)
        next()
    } catch (error) {
        res.status(401).send(error)
    }
}
module.exports=auth