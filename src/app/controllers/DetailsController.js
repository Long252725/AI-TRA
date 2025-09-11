const jwt = require('jsonwebtoken')
const Products = require("../models/Products")
class DetailsController {
    index( req, res, next) {
        Products.findOne({
            _id: req.query.id
        })
        .then(data => {
            console.log(data)
            res.render('sp', { product: data})

        })
    }
    
}
        
    


module.exports = new DetailsController


