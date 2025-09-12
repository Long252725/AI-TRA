const jwt = require('jsonwebtoken')
const Products = require("../models/Products")
const Users = require("../models/Users");

class RoomController {
   async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();

        res.render('room', {user})
    }
    
}
        
    


module.exports = new RoomController


