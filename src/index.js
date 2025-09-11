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
import routerInit from './router'
const jwt = require('jsonwebtoken')
const db = require('./config/db/index')
const axios = require("axios");

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
routerInit(app)
// API xử lý ảnh

app.listen(PORT, ()=> {
    console.log("PORT: ", PORT)
})