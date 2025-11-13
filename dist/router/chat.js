"use strict";

var router = require('express').Router();
var chatController = require('../app/controllers/ChatController');
router.get('/chat', chatController.index);
module.exports = router;