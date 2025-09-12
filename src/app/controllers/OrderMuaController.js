const jwt = require('jsonwebtoken')
const Products = require("../models/Products")
const Users = require("../models/Users")
class OrderMuaController {
    async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();
      const product = await Products.findOne({
        _id: req.query.id
    }).lean();

    res.render('orderMua', {product, user})

    }
    
}
        
    


module.exports = new OrderMuaController


