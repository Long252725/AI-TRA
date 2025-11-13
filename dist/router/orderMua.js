"use strict";

var router = require('express').Router();
var orderMuaController = require('../app/controllers/OrderMuaController');
router.get('/orderMua', orderMuaController.index);
module.exports = router;