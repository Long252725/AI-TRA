const router = require('express').Router()
const siteController  = require('../app/controllers/SiteController')

router.get('/', siteController.index)

module.exports = router