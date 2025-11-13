// src/index.js
import express from 'express';
import multer from 'multer';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import routerInit from './router/index.js';
import jwt from 'jsonwebtoken';
import db from './config/db/index.js';
import axios from 'axios';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import serverless from 'serverless-http';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Static files
app.use(express.static(path.join(process.cwd(), 'public')));
app.use('/bill', express.static(path.join(process.cwd(), 'public')));

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Set up multer để xử lý file upload
const upload = multer({ dest: "/tmp/uploads/" });

// Template engine
app.engine('handlebars', engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(process.cwd(), "views"));

// Connect DB
db.connect();

// Session
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
      httpOnly: true,
      secure: false // true nếu chạy HTTPS
    }
  })
);

// Router
routerInit(app);

// Export serverless handler
export const handler = serverless(app);
