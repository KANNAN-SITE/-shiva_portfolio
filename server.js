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

// Routes
// Serve the portfolio page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio server is running on http://localhost:${PORT}`);
});
