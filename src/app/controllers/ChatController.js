// src/app/controllers/ChatController.js
import jwt from 'jsonwebtoken';
import Users from '../models/Users.js';
import Products from '../models/Products.js';

class ChatController {
  index(req, res, next) {
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
            res.render('chat', { users: datas, user, product });
          });
        });
      })
      .catch(err => next(err));
  }
}

export default new ChatController();
