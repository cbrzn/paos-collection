const express = require ('express')
const cart = require('../helpers/cart_db')
const stripe = require('stripe')('sk_test_tzQwZEjZp3Xr6IyTfBRVIsJD')
const router = express.Router()

router.post('/new', (req, res) => {
    const { id, quantity, price } = req.body
    const total = +quantity * +price
    cart.new(6, id, quantity, price, total).then(data => {
        res.send({
            status:200
        })
    }).catch(err => {
        res.send({
            status: 500
        })
    })
})

router.get('/show/:user_id', (req, res) => {
    cart.show(req.params.user_id, false).then(carts => {
        res.send({
            status: 200,
            carts
        })
    })
})
    
router.post('/order', (req, res) => {
    let amount = 500
    stripe.charges.create({
        amount,
        description: "Paos collection",
        currency: "usd",
        source: req.body.token
    })
    .then(charge => res.send({status:200}))
    .catch(err => res.send({status:500}))
})
        


module.exports = router
