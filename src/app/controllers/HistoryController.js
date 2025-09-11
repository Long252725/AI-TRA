const jwt = require('jsonwebtoken')
const Histories = require("../models/Histories")
class HistoryController {
    index( req, res, next) {
        Histories.find({
            userName: req.query.username
        })
        .then(datas => {
            console.log(datas)
            res.render('history', {datas})
        })
    }
    
}
        
    


module.exports = new HistoryController


