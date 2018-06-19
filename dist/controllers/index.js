const express = require ('express')
const router = express.Router()

router.use('/', require('./session'))
router.use('/product',require('./product'))
router.use('/cart', require('./cart'))
router.use('/order', require('./order'))

module.exports = router
