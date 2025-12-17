const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  studentName: { type: String, required: true },
  amount: { type: Number, required: true },
  semester: { type: String, required: true },
  status: { type: String, enum: ['Paid', 'Pending', 'Overdue'], default: 'Pending' },
  dueDate: { type: Date },
  paidDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Fee', feeSchema);