const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  organizer: { type: String },
  category: { type: String, enum: ['Academic', 'Cultural', 'Sports', 'Technical', 'Other'], default: 'Other' },
  status: { type: String, enum: ['Upcoming', 'Ongoing', 'Completed'], default: 'Upcoming' }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);