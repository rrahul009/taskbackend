// index.js or app.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const taskRoutes = require('./routes/taskroutes');  // Corrected path for your routes file
const cors = require('cors');
require('dotenv').config();

 const dbURI=process.env.dbURI
 
mongoose.connect(process.env.dbURI)
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Middleware
app.use(express.json());
app.use(cors());

// Use routes for task-related actions
app.use('/api', taskRoutes); // This maps all routes defined in taskRoutes to '/api' prefix

// Define the server port
const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
