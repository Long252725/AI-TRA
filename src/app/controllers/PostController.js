const jwt = require('jsonwebtoken')

class PostController {
    index( req, res, next) {
        res.render('post')
    }
    
}
        
    


module.exports = new PostController


