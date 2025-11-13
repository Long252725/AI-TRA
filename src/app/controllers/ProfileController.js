import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Products from '../models/Products.js';
import bcrypt from 'bcrypt';
class ProfileController {
    index( req, res, next) {
        
        console.log(req.query.username)
        Products.find({
            userName: req.query.username
        })
        .then(datas => {
            Users.findOne({
                userName: req.query.username
            })
            .then(user => {
                res.render('profile', {datas, user})
            })
            .catch(err => {
            console.log("ko co1")
            })

        })
        .catch(err => {
            console.log("ko co")
        })
    }
    
}
        
    


export default new  ProfileController()


