// src/app/controllers/ChatController.js
import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Products from '../models/Products.js';
class DetailsController {
    async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();
      const product = await Products.findOne({
        _id: req.query.id
    }).lean();
    res.render('sp', { product, user})
    }
    
}
        
    


export default new DetailsController()


