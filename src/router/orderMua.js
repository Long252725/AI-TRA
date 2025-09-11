const router = require('express').Router()
const orderMuaController  = require('../app/controllers/OrderMuaController')

router.get('/orderMua', orderMuaController.index)

module.exports = router