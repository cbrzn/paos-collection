const express = require ('express')
const cart = require('../helpers/cart_db')
const stripe = require('stripe')('sk_test_tzQwZEjZp3Xr6IyTfBRVIsJD')
const order = require('../helpers/order_db')
const router = express.Router()

router.post('/new', (req, res) => {
    const { id, quantity, price } = req.body
    const total = +quantity * +price
    cart.new(req.user.id, id, quantity, price, total).then(data => {
        res.send({
            status:200
        })
    }).catch(err => {
        res.send({
            status: 500
        })
    })
})

router.get('/show', (req, res) => {
    if (req.user != undefined) {
        cart.show(req.user.id, false).then(carts => {
            res.send({
                status: 200,
                carts
            })
        }).catch(err => {
            res.send({
                status: 500
            })
        })
    } else {
        res.send({
            status: 403
        })
    }
})
    
router.post('/pay', (req, res) => {
    let amount = 1000
    stripe.charges.create({
        amount,
        description: "Paos collection",
        currency: "usd",
        source: req.body.token
    })
    .then(charge => {
        var d = new Date();
        var month = d.getMonth();
        var test = month+1;
        var date = d.getFullYear()+"-"+test+"-"+d.getDate();
        order.new(req.user.id, date, 'Not delivered', amount).then(data => {
            res.send({
                status:200
            })
        }).catch(err => { 
            res.send({
                status: 500
            })
        })
    }).catch(err => {
        console.log(err)
        res.send({
            status: 503 
        })
    })
})
        


module.exports = router
