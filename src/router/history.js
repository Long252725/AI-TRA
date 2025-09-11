const router = require('express').Router()
const historyController  = require('../app/controllers/HistoryController')

router.get('/history', historyController.index)

module.exports = router