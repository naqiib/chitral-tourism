const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please fill a valid email address'], // Basic email regex
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  participants: {
    type: Number,
    required: true,
    min: 1, // Minimum 1 participant
  },
  destination: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  bookedAt: {
    type: Date,
    default: Date.now, // Automatically set timestamp
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;