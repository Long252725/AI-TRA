"use strict";

var router = require('express').Router();
var detailsController = require('../app/controllers/DetailsController');
router.get('/details', detailsController.index);
module.exports = router;