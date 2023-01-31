const router=require('express').Router()
const bodyParser=require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))

const CustomerModel=require('../api_web_tech_assignment/model/customer')

router.get('/customerDetails',async (req,res)=>{
    try {
        const customer=await CustomerModel.find()
        res.status(201).json({
            customer
        })
    } catch (error) {
        res.json({
            message:"Not found"
        })
    }
})
let custid=99
router.post('/createCustomer',async(req,res)=>{
    try {
        const customer=await CustomerModel.create({
            customerid:custid+1,
            customerName:req.body.customerName,
            customerEmail:req.body.customerEmail,
    
        })
        const id=customer.custid
        custid++
        res.status(201).json({
            customer
        })
        
    } catch (error) {
        res.json(
            {
                message:'Not create'
            }
        )
    }
  
})

module.exports=router