import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Products from '../models/Products.js';
import bcrypt from 'bcrypt';
class RoomController {
   async index( req, res, next) {
      const user = await Users.findById(req.session.userId).lean();

        res.render('room', {user})
    }
    
}
        
    


export default new  RoomController()


