const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  package: { type: String, required: true },
  location: { type: String, required: true },
  eligibility: { type: String },
  description: { type: String },
  applicationDeadline: { type: Date },
  status: { type: String, enum: ['Open', 'Closed', 'Upcoming'], default: 'Open' }
}, { timestamps: true });

module.exports = mongoose.model('Placement', placementSchema);