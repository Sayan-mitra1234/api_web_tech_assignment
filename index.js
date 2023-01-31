const express=require('express')
const mongoose=require('mongoose')
const app=express()
const data=require('./routes/inventoryroute')
const customer=require('./routes/customerroute')
const order=require('./routes/orderroute')

mongoose.connect('mongodb://localhost:27017/api_web_tech_assignment ',{useNewUrlParser:true,useUnifiedTopology:true})

mongoose.connection.once('open',()=>{
    console.log("Database Connected Successfully");
}).on('connectionError',(err)=>{
console.log(err);
})

app.use('/',data)
app.use('/',customer)
app.use('/',order)
app.get("*",(req,res)=>{
    res.status(404).json({
       message:'Bad request'
    })
})

app.listen(3005,()=>{
    console.log('Server Connected Succesfully');
})