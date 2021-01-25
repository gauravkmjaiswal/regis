require('dotenv').config();
const express= require("express")
const hbs= require("hbs")
const path= require("path")
const bcrypt= require("bcryptjs")
const app = express()
const port= process.env.PORT || 4554
require("./db/connection.js")
const RegisterPeople=require("./models/registers")
const static_path=path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")
// console.log(static_path)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path));



app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path)
app.get('/',(req,res)=>{
    res.render("index")
})
app.get('/register',(req,res)=>{
    res.render("register")
})
app.get('/login',(req,res)=>{
    res.render("login")
})
app.post('/login',async (req,res)=>{
    try {
        const name=req.body.your_name;
        const pass=req.body.your_pass;
        const user=await RegisterPeople.findOne({name:name})
     
        const token=await user.generateAuthToken();
        console.log(`token part is ${token}`)

      if(user)
      {

        const matchh=await bcrypt.compare(pass,user.pass)
        if(matchh)
        {
            res.status(201).render("index")
        }
        else{
            res.status(400).send("wrong details")
        }

      }
      else{
          res.status(400).send("wrong details this")
      }
 
    }catch(error){
        // res.status(400).send("wrong details what")

        console.log("hello")
    }
})


app.post('/register',async (req,res)=>{
    try{
        const pas= req.body.pass;
        const re_pas= req.body.re_pass;
        if(pas!==re_pas)
        {
            return res.send("password and coonfirm password are diffrent !!!")
        }


        const regisPerson= await new RegisterPeople({
            name: req.body.name,
            email:req.body.email,
            pass:req.body.pass
            

        })

        const token=await regisPerson.generateAuthToken();

        const finalPeople= await regisPerson.save()
        res.status(201).render("index")

    }catch(e)
    {
        res.status(400).send("error")
    }
})


app.listen(port,()=>{
    console.log("server is working well")
})