const mongoose= require("mongoose")
const validator= require("validator")
const bcrypt=require("bcryptjs")
const jwt= require("jsonwebtoken")
const peopleSchema= new mongoose.Schema({
    name:{
        type:String,
       required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("wrong Email !!!")
            }
        }
    },
    pass:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    userdata:[{
        
            note:{
                type:String,
               
            },
            sub:{
                type:String
            }
        
    }]
  


})
peopleSchema.methods.generateAuthToken= async function()
{
    try {
        const token=jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY)
        console.log(token)
        this.tokens=this.tokens.concat({token:token})
        await this.save();

        return token;
    } catch (error) {
        res.send("error in function for token")
    }
}


peopleSchema.pre("save",async function(next){
    if(this.isModified("pass"))
    {
        this.pass= await bcrypt.hash(this.pass,10)
    }
    next()
})
const RegisterPeople=new mongoose.model("RegisterPeople",peopleSchema)
module.exports= RegisterPeople;