const jwt = require('jsonwebtoken')
const Products = require("../models/Products")
class OrderMuaController {
    index( req, res, next) {
        Products.findOne({
            _id: req.query.id
        })
        .then(product => {
            res.render('orderMua', {product})
        })
    }
    
}
        
    


module.exports = new OrderMuaController


