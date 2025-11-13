// src/app/controllers/ChatController.js
import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Histories from '../models/Histories.js';
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
        
    


export default new HistoryController()


