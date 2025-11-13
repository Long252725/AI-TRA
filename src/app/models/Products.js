// src/models/Products.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const Products = new Schema({
  type: { type: String, required: true },
  nameSach: { type: String, required: true },
  nameSub: { type: String, required: true },
  khoa: { type: String },
  state: { type: String, required: true },
  picSach: { type: String },
  picUser: { type: String },
  nam_xuat_ban: { type: Number },
  nxb: { type: String },
  price: { type: Number },
  userName: { type: String, required: true },
  fullName: { type: String, required: true },
  des: { type: String },
}, { timestamps: true }); // Tự tạo createdAt, updatedAt

export default mongoose.model('Product', Products);
