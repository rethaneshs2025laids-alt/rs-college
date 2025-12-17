const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
  routeNumber: { type: String, required: true, unique: true },
  routeName: { type: String, required: true },
  driverName: { type: String, required: true },
  busNumber: { type: String, required: true },
  capacity: { type: Number, required: true },
  fare: { type: Number, required: true },
  stops: [{ type: String }],
  status: { type: String, default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Transport', transportSchema);