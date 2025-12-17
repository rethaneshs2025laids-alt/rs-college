const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  credits: { type: Number, required: true, default: 3 },
  semester: { type: Number },
  description: { type: String },
  faculty: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);