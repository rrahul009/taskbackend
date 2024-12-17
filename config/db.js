// index.js or app.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize the app
const app = express();

// Load environment variables from .env file
dotenv.config();

// MongoDB URI (can be stored in .env file)
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/taskmanagement';  // Default to local database if .env is not set

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Sample middleware for testing
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Task Management App!');
});

// Example route for tasks (You can add more routes based on your application)
app.get('/tasks', (req, res) => {
  res.json([{ task: 'Example Task' }]); // This will be replaced with actual logic
});

// Define the server port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
