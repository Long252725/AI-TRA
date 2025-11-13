// src/models/Users.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const Users = new Schema({
  email: { type: String, required: true },
  pass: { type: String, required: true },
  picUser: { 
    type: String, 
    default: "https://static.vecteezy.com/system/resources/previews/011/490/381/non_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg"
  },
  userName: { type: String, required: true },
  fullName: { type: String },
  school: { type: String, default: "Dại học Kinh tế quốc dân " },
  des: { type: String, default: "Chưa có" },
  khoa: { type: String, default: "CNTT" },
  address: { type: String, default: "Hà Nội" },
}, { timestamps: true }); // Tự tạo createdAt, updatedAt

export default mongoose.model('User', Users);
