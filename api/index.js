const express = require('express')
const app = express()
var cors = require('cors')
//transcript pakage
const bcrypt = require('bcryptjs');
const { default: mongoose } = require('mongoose')
//importing User model
const User = require("./models/User.js")


//to connect mongoose to mongodb url 
require('dotenv').config()
mongoose.connect(process.env.MONGU_URL)

const bcryptSalt = bcrypt.genSaltSync(10)
//so we can serve all the res as json obj
app.use(express.json())
//alow the FEnd to fetch data
app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5173',
}))



//register a user 
app.post('/register', async function (req, res) {
    const {name,email,password}=req.body
    try{
        const userDoc =  await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt),
        })
        //the res
        res.json(userDoc)
    }catch(e) {
         //if the email is already used > errur
        res.status(422).json(e)

    }
    
  })
  
//login a user 
  app.post('/login', async function (req, res) {
    const {email,password}=req.body

    const userDoc = await User.findOne({email:email})

    if(userDoc){
        const passOk= bcrypt.compareSync(password, userDoc.password)
        if(passOk){
            res.json('ok')
        }else{
            res.status(422).json('not ok')
        }
    }else{
        res.json('not found')
    }
    
  })
//port
app.listen(3000)