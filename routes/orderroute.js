const router = require('express').Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

const OrderModel = require('../api_web_tech_assignment/model/order')

router.get('/orders',async (req,res)=>{
    try {
        const order=await OrderModel.find()
        res.status(201).json({
            order
        })
    } catch (error) {
        res.json({
            message:"Not found"
        })
    }
})
router.post('/createOrders', async (req, res) => {
    try {
        const order = await OrderModel.create({
            customerid: req.body.customerid,
            inventoryid: req.body.inventoryid,
            inventoryName: req.body.inventoryName,
            quantity: req.body.quantity,

        })

        res.status(201).json({
            order
        })

    } catch (error) {
        res.json(
            {
                message: 'Not create'
            }
        )
    }

})

module.exports = router