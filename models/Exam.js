const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  course: { type: String, required: true },
  courseCode: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  room: { type: String, required: true },
  duration: { type: Number, default: 180 },
  examType: { type: String, enum: ['Mid-term', 'Final', 'Quiz', 'Assignment'], default: 'Mid-term' },
  department: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);