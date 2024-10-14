const express=require('express')
const { default: mongoose } = require('mongoose')
const cors = require('cors');
const productrouter = require('./routes/productroutes');
const userRouter = require('./routes/userroutes');
const app=express()
app.use(express.json())
app.use(cors());
app.use('/user',userRouter)
app.use('/product',productrouter)
const connectdb=()=>{
    try{
    mongoose.connect('mongodb+srv://maheshwarisilvi98:silvi123@cluster0.jftpm.mongodb.net/books')
    console.log('database is connected')
    }
    catch(err){
        console.log(err)
    }
    
}

app.listen(8080,()=>{
    connectdb()
    console.log('server is started')
})