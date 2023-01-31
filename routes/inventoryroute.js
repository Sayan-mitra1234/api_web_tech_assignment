const router=require('express').Router()
const bodyParser=require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))

const InventoryModel=require('../api_web_tech_assignment/model/inventory')

router.get('/inventory',async (req,res)=>{
    try {
        const inventory=await InventoryModel.find()
        res.status(201).json({
            inventory
        })
    } catch (error) {
        res.json({
            message:"Not found"
        })
    }
})


let tempId=500
router.post('/createInventory',async(req,res)=>{
    try {
        const inventory=await InventoryModel.create({
            inventoryid:tempId+1,
            inventoryType:req.body.inventoryType,
            inventoryName:req.body.inventoryName,
            Availability:req.body.Availability,
    
        })
        const id=inventory.tempId
        tempId++
        res.status(201).json({
            inventory
        })
        
    } catch (error) {
        res.json(
            {
                message:'Not create'
            }
        )
    }
  
})
router.get('/inventory/inventoryType/:id',async (req,res)=>{
    try {
        const inventory=await InventoryModel.find({_id:req.params.id})
        res.status(201).json({
          
            inventory
        })
    } catch (error) {
        res.json({
            message:"Not found"
        })
    }
})

module.exports=router