// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Import nodemailer
require('dotenv').config(); // Load environment variables

const bookingRoutes = require('./routes/bookingRoutes'); // Import booking routes

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins (adjust in production for specific origins)
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

// Nodemailer Transporter Setup for Sending Emails
// This configures how your server will send emails.
// Replace with your actual email service provider details.
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail', // e.g., 'gmail', 'Outlook365', or your SMTP host
  auth: {
    user: process.env.EMAIL_USER,    // The email address that will SEND the messages
    pass: process.env.EMAIL_PASS     // The password for the sending email (use an app password for Gmail/Outlook!)
  }
});

// Verify transporter connection (optional, but good for debugging)
transporter.verify(function (error, success) {
  if (error) {
    console.error("Nodemailer transporter verification error:", error);
  } else {
    console.log("Nodemailer server is ready to take our messages");
  }
});


// API Routes for Contact Form Submission
// This endpoint receives data from your frontend contact form.
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Basic server-side validation to ensure essential fields are present
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields: name, email, subject, and message.' });
  }

  // Define the email content and the recipient (your email address)
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender's email address (should match your configured EMAIL_USER)
    to: process.env.RECEIVING_EMAIL, // The email address where you want to RECEIVE the contact messages
    replyTo: email, // Set the user's email as the reply-to address for easy communication
    subject: `Contact Form: ${subject} from ${name}`, // Subject line for the email you will receive
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    // Attempt to send the email using the configured transporter
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully from: ${email} to ${process.env.RECEIVING_EMAIL}`);
    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    // Log the error and send a 500 (Internal Server Error) response
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});


// API Routes for Bookings
// All requests starting with /api/bookings will be forwarded to bookingRoutes
app.use('/api/bookings', bookingRoutes);

// Basic root route for testing if the server is running
app.get('/', (req, res) => {
  res.send('Travel Booking API is running!');
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
