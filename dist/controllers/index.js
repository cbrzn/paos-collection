const express = require ('express')
const router = express.Router()

router.use('/', require('./session'))
router.use('/product',require('./product'))
router.use('/cart', require('./cart'))

module.exports = router
