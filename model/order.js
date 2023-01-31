const mongoose=require('mongoose')
const customerid=require('./customer')
const inventoryid=require('./inventory')
const inventoryName=require('./inventory')


const orderSchema=new mongoose.Schema({
    customerid:{type:Number,required:true},
    inventoryid:{type:Number,required:true},
    inventoryName:{type:String,required:true},
    quantity:{type:Number,required:true}
},{timestamps:true})

const OrderModel=new mongoose.model('order',orderSchema)
module.exports=OrderModel