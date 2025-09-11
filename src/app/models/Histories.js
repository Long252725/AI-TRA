const mongoose = require('mongoose');
// const slug = require('mongoose-slug-updater');
// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Histories = new Schema({
  type: { type: String, required: true },
  nameSach: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  picSach: { type: String }, // ví dụ: 'Triết học Mác - Lênin'
  time: { type: String }, // ví dụ: 'Triết học Mác - Lênin'
  userName: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  
}, { timestamps: true }); // Tự tạo createdAt, updatedAt

module.exports = mongoose.model('Historie', Histories);