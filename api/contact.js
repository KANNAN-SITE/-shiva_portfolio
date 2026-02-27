const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/portfolio';

// connect once
if (!mongoose.connection.readyState) {
  mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// define schema (duplicate of models/Contact.js)
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: 'Please fill in all fields.' });
    return;
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
