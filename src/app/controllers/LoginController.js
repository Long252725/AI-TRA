const jwt = require('jsonwebtoken')
const Users = require("../models/Users")
const Products = require("../models/Products")
const bcrypt = require("bcrypt");
class LoginController {
    index( req, res, next) {
       res.render('login')
    }
    async sigup(req, res, next) {
        console.log(1111)
        const user = req.body;
        const userName = user.userName.trim();
        const fullName = user.fullName.trim();
        const email = user.email.trim();
        const pass = user.pass.trim();

        // TODO: validate + lưu DB
        if (!userName || !fullName || !email || !pass) {
            return res.status(400).json({ message: "Thiếu thông tin đăng ký!" });
        }

        // Ví dụ lưu tạm (sau này bạn lưu MongoDB/MySQL)
        try {
            // Kiểm tra email đã tồn tại chưa
            const existUser = await Users.findOne({ email });
            if (existUser) {
              return res.status(400).json({ message: "Email đã tồn tại!" });
            }
        
            // Hash mật khẩu
            const hashedPassword = await bcrypt.hash(pass, 10);
        
            // Lưu user vào DB
            const newUser = new Users({
              userName,
              fullName,
              email,
              pass: hashedPassword,
            });
        
            await newUser.save();
        
            res.json({ message: "Đăng ký thành công!" });
          } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Lỗi server!" });
          }
    
    }
    async login(req, res, next) {
        const { email, pass } = req.body;

        try {
            const user = await Users.findOne({ email });
            if (!user) {
            return res.status(400).json({ message: "Email không tồn tại!" });
            }

            const isMatch = await bcrypt.compare(pass, user.pass);
            if (!isMatch) {
            return res.status(400).json({ message: "Sai mật khẩu!" });
            }
            // ✅ Gán userId vào session
    req.session.userId = user._id;
    req.session.user = { fullName: user.fullName, email: user.email };

            // Nếu login thành công
            res.json({ message: "Đăng nhập thành công!", user: { id: user._id, email: user.email } });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Lỗi server!" });
        }
    
    }
    logout(req, res) {
        req.session.destroy(() => {
          res.redirect("/login");
        });
      }
    
}
        
    


module.exports = new LoginController


