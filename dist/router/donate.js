"use strict";

var router = require('express').Router();
var donateController = require('../app/controllers/DonateController');
router.get('/sv5t', donateController.index);
module.exports = router;