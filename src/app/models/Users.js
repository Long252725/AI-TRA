const mongoose = require('mongoose');
// const slug = require('mongoose-slug-updater');
// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Users = new Schema({
  email: { type: String, required: true },
  pass: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  picUser: { type: String }, // ví dụ: 'Triết học Mác - Lênin'
  userName: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  fullName: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  school: { type: String}, // ví dụ: 'Triết học Mác - Lênin'
  des: { type: String}, // ví dụ: 'Triết học Mác - Lênin'
  khoa: { type: String}, // ví dụ: 'Triết học Mác - Lênin'
  address: { type: String}, // ví dụ: 'Triết học Mác - Lênin'
}, { timestamps: true }); // Tự tạo createdAt, updatedAt

module.exports = mongoose.model('User', Users);