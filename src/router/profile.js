const router = require('express').Router()
const profileController  = require('../app/controllers/profileController')

router.get('/profile', profileController.index)

module.exports = router