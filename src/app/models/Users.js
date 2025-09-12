const mongoose = require('mongoose');
// const slug = require('mongoose-slug-updater');
// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Users = new Schema({
  email: { type: String, required: true },
  pass: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  picUser: { type: String , default: "https://static.vecteezy.com/system/resources/previews/011/490/381/non_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-white-background-vector.jpg" }, // ví dụ: 'Triết học Mác - Lênin'
  userName: { type: String, required: true }, // ví dụ: 'Triết học Mác - Lênin'
  fullName: { type: String }, // ví dụ: 'Triết học Mác - Lênin'
  school: { type: String, default:"Dại học Kinh tế quốc dân "}, // ví dụ: 'Triết học Mác - Lênin'
  des: { type: String, default: "Chưa có"}, // ví dụ: 'Triết học Mác - Lênin'
  khoa: { type: String, default: "CNTT"}, // ví dụ: 'Triết học Mác - Lênin'
  address: { type: String, default: "Hà Nội"}, // ví dụ: 'Triết học Mác - Lênin'
}, { timestamps: true }); // Tự tạo createdAt, updatedAt

module.exports = mongoose.model('User', Users);