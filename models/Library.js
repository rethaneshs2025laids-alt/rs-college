const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  totalCopies: { type: Number, default: 1 },
  availableCopies: { type: Number, default: 1 },
  status: { type: String, default: 'Available' }
}, { timestamps: true });

module.exports = mongoose.model('Library', librarySchema);