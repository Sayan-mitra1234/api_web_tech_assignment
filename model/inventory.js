const mongoose=require('mongoose')

const inventorySchema=new mongoose.Schema({
    inventoryid:{type:Number},
    inventoryType:{type:String,required:true},
    inventoryName:{type:String,required:true},
    Availability:{type:Number,required:true},
},{timestamps:true})

const InventoryModel=new mongoose.model('inventory',inventorySchema)
module.exports=InventoryModel