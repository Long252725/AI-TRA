const jwt = require('jsonwebtoken')
const Histories = require("../models/Histories")
const Users = require("../models/Users")
class HistoryController {
    async index( req, res, next) {
        const histories = await Histories.find({
            userName: req.query.username
        }).lean()
        // Lấy user từ session
        const user = await Users.findById(req.session.userId).lean();
        res.render("history", { datas: histories, user })
    }
    
}
        
    


module.exports = new HistoryController


