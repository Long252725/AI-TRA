// src/app/controllers/ChatController.js
import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Products from '../models/Products.js';
class DonateController {
    async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();

        res.render('sv5t', {user})
    }
    
}
        
    


export default new DonateController()


