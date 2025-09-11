const jwt = require('jsonwebtoken')
const Users = require("../models/Users")
const Products = require("../models/Products")
class OrderTradeController {
    index( req, res, next) {
        Products.findOne({
            _id: req.query.id
        })
        .then(pro => {
            Products.find({
                userName: req.query.username
            })
            .then(pros => {
                res.render('orderTrade', {pro, pros})
            })

        })
    }
    
}
        
    


module.exports = new OrderTradeController


