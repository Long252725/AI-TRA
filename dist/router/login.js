"use strict";

var router = require('express').Router();
var loginController = require('../app/controllers/LoginController');
router.get('/login', loginController.index);
router.post('/login/sigup-user', loginController.sigup);
router.post('/login/login-user', loginController.login);
router.get('/logout', loginController.logout);
module.exports = router;