import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Products from '../models/Products.js';
import bcrypt from 'bcrypt';

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
        
    


export default new  PostController()


