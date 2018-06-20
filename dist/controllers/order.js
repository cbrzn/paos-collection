const express = require ('express')
const order = require('../helpers/order_db')
const router = express.Router()

router.post('/new', (req, res) => {
   const { id, total } = req.body
})

router.get('/all', (req, res) => {
    order.all().then(orders => {
        res.send({
            status: 200,
            orders
        })
    }).catch(err => {
        res.send({ 
            status: 500
        })
    })
})   

module.exports = router
