const router = require('express').Router()
const orderTradeController  = require('../app/controllers/OrderTradeController')

router.get('/orderTrade', orderTradeController.index)

module.exports = router