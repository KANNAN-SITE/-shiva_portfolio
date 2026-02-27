const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/portfolio';
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✓ Connected to MongoDB successfully');
})
.catch((err) => {
  console.log('✗ MongoDB Connection Error:', err.message);
  console.log('Note: Make sure MongoDB is running. You can start it with: mongod');
});

// contact model (for local dev)
const Contact = require('./models/Contact');

// Routes
// Serve the portfolio page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API endpoint to submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please fill in all fields.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log(`New contact: ${name} <${email}>`);

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});


// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio server is running on http://localhost:${PORT}`);
});
