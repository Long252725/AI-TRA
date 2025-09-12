const router = require('express').Router()
const donateController  = require('../app/controllers/donateController')

router.get('/sv5t', donateController.index)

module.exports = router