"use strict";

var _expressHandlebars = require("express-handlebars");
var _index = _interopRequireDefault(require("./router/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var express = require('express');
var multer = require("multer");
var _require = require("child_process"),
  spawn = _require.spawn;
var fs = require("fs");
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
require('dotenv').config();
var PORT = process.env.PORT || 4000;
var jwt = require('jsonwebtoken');
var db = require('./config/db/index');
var axios = require("axios");
var session = require("express-session");
var MongoStore = require("connect-mongo");

// Import function exported by newly installed node modules.
var Handlebars = require('handlebars');
var _require2 = require('@handlebars/allow-prototype-access'),
  allowInsecurePrototypeAccess = _require2.allowInsecurePrototypeAccess;
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/bill', express["static"](path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());

// Set up multer để xử lý file upload
var upload = multer({
  dest: "uploads/"
});
// template
app.engine('handlebars', (0, _expressHandlebars.engine)({
  defaultLayout: 'main',
  // ...implement newly added insecure prototype access
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));

//connect
db.connect();
// API xử lý ảnh
app.use(session({
  secret: "jkshkdahsadsadhsad",
  // key bí mật
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://Long252725:Monkeydgrab1234@cluster0.gvmtphz.mongodb.net/Books",
    collectionName: "sessions"
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 2,
    // 2 giờ
    httpOnly: true,
    // bảo mật (chặn JS client đọc cookie)
    secure: false // true nếu chạy HTTPS
  }
}));
(0, _index["default"])(app);
app.listen(PORT, function () {
  console.log("PORT: ", PORT);
});