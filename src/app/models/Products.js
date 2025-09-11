const mongoose = require('mongoose');
// const slug = require('mongoose-slug-updater');
// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Products = new Schema({
  type: { type: String, required: true },
  nameSach: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  nameSub: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  khoa: { type: String }, // ví dụ: 'Triết học Mác - Lênin'
  state: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  picSach: { type: String }, // ví dụ: 'Triết học Mác - Lênin'
  picUser: { type: String }, // ví dụ: 'Triết học Mác - Lênin'
  nam_xuat_ban: { type: Number }, // ví dụ: 'Triết học Mác - Lênin'
  nxb: { type: String }, // ví dụ: 'Triết học Mác - Lênin'
  price: { type: Number }, // ví dụ: 'Triết học Mác - Lênin'
  userName: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  fullName: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  des: { type: String}, // ví dụ: 'Triết học Mác - Lênin'
}, { timestamps: true }); // Tự tạo createdAt, updatedAt

module.exports = mongoose.model('Product', Products);