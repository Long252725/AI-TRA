const jwt = require('jsonwebtoken')
const Users = require("../models/Users")
const Products = require("../models/Products")
class ChatController {
    index( req, res, next) {
        Users.find({})
        .then(datas => {
            Users.findOne({
                userName: req.query.username
            })
            .then(user => {
                Products.findOne({
                    _id: req.query.id
                })
                .then(product => {

                    res.render('chat', {users: datas, user, product})
                })
            })
        })
    }
    
}
        
    


module.exports = new ChatController


