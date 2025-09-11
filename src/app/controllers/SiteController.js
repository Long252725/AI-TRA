const jwt = require('jsonwebtoken')
const Products = require("../models/Products")
class SiteController {
    index( req, res, next) {
        Products.find()
        .then(datas => {
            console.log(datas)
            res.render('home', { products: datas})
        })
        .catch(err => console.log(err))
    }
    
}
        
    


module.exports = new SiteController


