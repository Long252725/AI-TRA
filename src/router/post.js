const router = require('express').Router()
const postController  = require('../app/controllers/PostController')

router.get('/post', postController.index)
router.post('/post/sp', postController.post)

module.exports = router