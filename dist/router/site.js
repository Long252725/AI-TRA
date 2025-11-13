"use strict";

var router = require('express').Router();
var siteController = require('../app/controllers/SiteController');
router.get('/', siteController.index);
module.exports = router;