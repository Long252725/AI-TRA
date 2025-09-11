const router = require('express').Router()
const detailsController  = require('../app/controllers/DetailsController')

router.get('/details', detailsController.index)

module.exports = router