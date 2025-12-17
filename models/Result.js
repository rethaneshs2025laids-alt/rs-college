const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  studentName: { type: String, required: true },
  course: { type: String, required: true },
  semester: { type: String, required: true },
  marks: { type: Number, required: true },
  grade: { type: String, required: true },
  gpa: { type: Number },
  status: { type: String, enum: ['Pass', 'Fail', 'Pending'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Result', resultSchema);