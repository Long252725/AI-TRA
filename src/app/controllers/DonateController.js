const jwt = require('jsonwebtoken')
const Products = require("../models/Products")
const Users = require("../models/Users")
class DonateController {
    async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();

        res.render('sv5t', {user})
    }
    
}
        
    


module.exports = new DonateController


