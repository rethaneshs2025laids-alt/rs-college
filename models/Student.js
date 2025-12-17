const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  percentage12th: { type: String, required: true },
  jeeScore: { type: String },
  department: { type: String, required: true },
  rollNo: { type: String, unique: true },
  status: { type: String, default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);