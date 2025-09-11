const router = require('express').Router()
const postController  = require('../app/controllers/PostController')

router.get('/post', postController.index)

module.exports = router