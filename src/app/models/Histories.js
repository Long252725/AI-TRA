// src/models/Histories.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const Histories = new Schema({
  type: { type: String, required: true },
  nameSach: { type: String, required: true },
  picSach: { type: String },
  time: { type: String },
  userName: { type: String, required: true },
}, { timestamps: true }); // Tự tạo createdAt, updatedAt

export default mongoose.model('Historie', Histories);
