"use strict";

var router = require('express').Router();
var historyController = require('../app/controllers/HistoryController');
router.get('/history', historyController.index);
module.exports = router;