const express = require('express');
const router = express.Router();
const Booking = require('../models/booking'); // Import the Booking model

// POST /api/bookings - Create a new booking
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, participants, destination, date } = req.body;

    // Basic server-side validation
    if (!name || !email || !phone || !participants || !destination || !date) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newBooking = new Booking(req.body);
    await newBooking.save(); // Save to MongoDB

    res.status(201).json({ message: 'Booking successful!', booking: newBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).map(key => error.errors[key].message);
      return res.status(400).json({ error: errors.join(', ') });
    }
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

// (Optional) GET /api/bookings - Get all bookings (for an admin panel, for example)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'An internal server error occurred.' });
  }
});

module.exports = router;