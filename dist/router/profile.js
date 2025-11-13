"use strict";

var router = require('express').Router();
var profileController = require('../app/controllers/ProfileController');
router.get('/profile', profileController.index);
module.exports = router;