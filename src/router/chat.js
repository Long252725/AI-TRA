const router = require('express').Router()
const chatController  = require('../app/controllers/ChatController')

router.get('/chat', chatController.index)

module.exports = router