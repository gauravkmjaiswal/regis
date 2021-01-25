const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/registration",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch((e)=>{
    console.log("no connection")
})