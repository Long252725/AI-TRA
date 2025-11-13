"use strict";

var router = require('express').Router();
var roomController = require('../app/controllers/RoomController');
router.get('/room', roomController.index);
module.exports = router;