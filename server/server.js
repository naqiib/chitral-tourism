const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const bookingRoutes = require('./routes/bookingRoutes'); // Import booking routes

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('FATAL ERROR: MONGO_URI is not defined in .env file!');
  process.exit(1); // Exit process if URI is missing
}
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on DB connection failure
  });

// API Routes
// All routes starting with /api/bookings will be handled by bookingRoutes
app.use('/api/bookings', bookingRoutes);

// Basic root route
app.get('/', (req, res) => {
  res.send('Travel Booking API is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});