const jwt = require('jsonwebtoken')
const Users = require("../models/Users");

class PostController {
    async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();

        res.render('post', {user})
    }
    async post(req, res, next) {
      const user = await Users.findById(req.session.userId).lean();

        res.send('post', {user})
    }
    
}
        
    


module.exports = new PostController


