const router = require('express').Router()
const profileController  = require('../app/controllers/ProfileController')

router.get('/profile', profileController.index)

module.exports = router