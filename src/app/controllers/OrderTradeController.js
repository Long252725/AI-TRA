import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Products from '../models/Products.js';
import bcrypt from 'bcrypt';
class OrderTradeController {
    async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();

        Products.findOne({
            _id: req.query.id
        })
        .then(pro => {
            Products.find({
                userName: req.query.username
            })
            .then(pros => {
                res.render('orderTrade', {pro, pros, user})
            })

        })
    }
    
}
        
    


export default new  OrderTradeController()


