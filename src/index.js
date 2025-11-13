const express = require('express')
const multer = require("multer");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require('path')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 4000;
import { engine } from 'express-handlebars';
import routerInit from './router/index'
const jwt = require('jsonwebtoken')
const db = require('./config/db/index')
const axios = require("axios");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// Import function exported by newly installed node modules.
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

app.use(express.static(path.join(__dirname, 'public')))
app.use('/bill',express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())

// Set up multer để xử lý file upload
const upload = multer({ dest: "uploads/" });
// template
app.engine('handlebars', engine({
    defaultLayout: 'main',
    // ...implement newly added insecure prototype access
    handlebars: allowInsecurePrototypeAccess(Handlebars)
    }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));

//connect
db.connect()
// API xử lý ảnh
app.use(
    session({
      secret: "jkshkdahsadsadhsad", // key bí mật
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: "mongodb+srv://Long252725:Monkeydgrab1234@cluster0.gvmtphz.mongodb.net/Books",
        collectionName: "sessions"
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 2, // 2 giờ
        httpOnly: true,             // bảo mật (chặn JS client đọc cookie)
        secure: false               // true nếu chạy HTTPS
      }
    })
  );
routerInit(app)

app.listen(PORT, ()=> {
    console.log("PORT: ", PORT)
})