import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Products from '../models/Products.js';
import bcrypt from 'bcrypt';
class OrderMuaController {
    async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();
      const product = await Products.findOne({
        _id: req.query.id
    }).lean();

    res.render('orderMua', {product, user})

    }
    
}
        
    


export default new  OrderMuaController()


