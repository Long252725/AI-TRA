"use strict";

var mongoose = require('mongoose');
// const slug = require('mongoose-slug-updater');
// mongoose.plugin(slug);

var Schema = mongoose.Schema;
var Histories = new Schema({
  type: {
    type: String,
    required: true
  },
  nameSach: {
    type: String,
    required: true
  },
  // ví dụ: 'Triết học Mác - Lênin'
  picSach: {
    type: String
  },
  // ví dụ: 'Triết học Mác - Lênin'
  time: {
    type: String
  },
  // ví dụ: 'Triết học Mác - Lênin'
  userName: {
    type: String,
    required: true
  } // ví dụ: 'Triết học Mác - Lênin'
}, {
  timestamps: true
}); // Tự tạo createdAt, updatedAt

module.exports = mongoose.model('Historie', Histories);