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
import db from './config/db/index.js'; // Giả sử db.connect() đã được export
import axios from 'axios';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import serverless from 'serverless-http';

// Load Environment Variables
dotenv.config();

// Khai báo ứng dụng Express
const app = express();
const PORT = process.env.PORT || 4000;

// Sử dụng __dirname cho môi trường Node.js (cần lưu ý nếu dùng Vercel build khác)
// Nhưng path.join(process.cwd(), '...') thường an toàn hơn trong môi trường Vercel build
const currentDir = process.cwd(); 

// --- START: Tối ưu hóa Static Files ---
app.use(express.static(path.join(currentDir, 'public')));
app.use('/bill', express.static(path.join(currentDir, 'public')));
// --- END: Tối ưu hóa Static Files ---

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Set up multer để xử lý file upload (Đã sửa lỗi EROFS)
const upload = multer({ dest: "/tmp/uploads/" });

// Template engine
app.engine('handlebars', engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(currentDir, "views"));

// ******************************************************
// ************ SỬA LỖI TIMEOUT QUAN TRỌNG **************
// ******************************************************

// KHÔNG GỌI db.connect() Ở CẤP CAO NHẤT. 
// Nếu bạn gọi db.connect() ngay đây, nó sẽ chạy đồng bộ khi Vercel khởi tạo hàm 
// và gây ra Timeout nếu kết nối bị chậm/treo.

// Thay vào đó, chúng ta sẽ kết nối DB khi Serverless Function chạy (tức là khi có request).
// Nếu DB đã kết nối (hoặc trong cùng một Cold Start), nó sẽ không kết nối lại.
// Để làm điều này, bạn cần sửa lại hàm connect() trong db/index.js (xem dưới).

// Khai báo kết nối DB một lần duy nhất.
let isConnected = false;
app.use(async (req, res, next) => {
    if (!isConnected) {
        try {
            await db.connect(); // Gọi hàm kết nối bất đồng bộ
            isConnected = true;
            console.log("Database connected successfully on cold start.");
        } catch (error) {
            console.error("Database connection failed:", error);
            // Có thể chọn gửi lỗi 500 nếu DB là bắt buộc
        }
    }
    next();
});

// ******************************************************

// Session (Sử dụng chuỗi kết nối cứng cho ví dụ. Nên dùng Biến Môi trường)
app.use(
  session({
    secret: "jkshkdahsadsadhsad",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      // LƯU Ý: Nếu chuỗi kết nối này là process.env.MONGODB_URI, 
      // bạn PHẢI đặt biến môi trường trên Vercel.
      mongoUrl: "mongodb+srv://Long252725:Monkeydgrab1234@cluster0.gvmtphz.mongodb.net/Books",
      collectionName: "sessions"
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' // Tự động bật true nếu là prod
    }
  })
);

// Router
routerInit(app);

// Export serverless handler
export const handler = serverless(app);

// ******************************************************
// LƯU Ý QUAN TRỌNG VỀ ĐỊNH DẠNG FILE
// ******************************************************
// Dù bạn đã chuyển sang ES Module, cú pháp 'export const handler = serverless(app);' 
// vẫn có thể gây ra lỗi trong một số cấu hình Vercel. 
// Đảm bảo file package.json của bạn có "type": "module" hoặc thử 
// thay thế bằng cú pháp CommonJS nếu vẫn lỗi: 
// module.exports = serverless(app);