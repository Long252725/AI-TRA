const jwt = require('jsonwebtoken')
const Users = require("../models/Users")
const Products = require("../models/Products")
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
        
    


module.exports = new OrderTradeController


