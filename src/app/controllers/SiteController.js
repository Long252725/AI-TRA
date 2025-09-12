const Products = require("../models/Products");
const Users = require("../models/Users");

class SiteController {
  async index(req, res, next) {
    try {
      if (!req.session.userId) {
      return res.redirect("/login"); // chưa đăng nhập thì chuyển về login
    }

      // Lấy user từ session
      const user = await Users.findById(req.session.userId).lean();

      // Lấy danh sách sản phẩm
      const products = await Products.find().lean();

      // Render ra view và truyền cả user + products
      res.render("home", {
        user,
        products
      });
    } catch (err) {
      next(err); // để Express xử lý error middleware
    }
  }
}

module.exports = new SiteController();
