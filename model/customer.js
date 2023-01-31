const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    customerid:{type:Number},
    customerName:{type:String,required:true},
    customerEmail:{type:String,required:true},
},{timestamps:true})

const CustomerModel=new mongoose.model('customer',customerSchema)
module.exports=CustomerModel