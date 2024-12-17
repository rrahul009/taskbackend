// models/taskModel.js

const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,   // Title is required
      trim: true,       // Remove extra spaces around the string
    },
    description: {
      type: String,
      required: true,   // Description is required
      trim: true,
    },
    dueDate: {
      type: Date,       // Store the due date as a Date object
      required: true,   // Ensure a due date is provided
    },
    priority: {
      type: String,
      enum: ['high', 'medium', 'low'],  // Validate priority to be one of these values
      required: true,  // Priority is required
    },
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt timestamps
);

// Create the Task model from the schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
