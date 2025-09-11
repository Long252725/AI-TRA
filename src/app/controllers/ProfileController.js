const jwt = require('jsonwebtoken')
const Products = require("../models/Products")
const Users = require("../models/Users")
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
        
    


module.exports = new ProfileController


