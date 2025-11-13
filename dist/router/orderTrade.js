"use strict";

var router = require('express').Router();
var orderTradeController = require('../app/controllers/OrderTradeController');
router.get('/orderTrade', orderTradeController.index);
module.exports = router;