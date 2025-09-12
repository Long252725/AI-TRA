const router = require('express').Router()
const roomController  = require('../app/controllers/RoomController')

router.get('/room', roomController.index)

module.exports = router