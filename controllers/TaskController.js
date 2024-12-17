// controllers/taskController.js

const Task = require('../models/taskmodel')

exports.addTask = async (req, res) => {
    const { title, description, dueDate, priority } = req.body;

    if (!title || !description || !dueDate || !priority) {
        return res.status(400).json({ msg: 'Please provide all fields: title, description, dueDate, and priority' });
    }

    try {
        const newTask = new Task({
            title,
            description,
            dueDate,
            priority,
        });

        await newTask.save();  // Save the task to the database
        res.status(201).json({ msg: 'Task added successfully', task: newTask });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server Error' });
    }
};

exports.viewTask = async (req, res) => {
    try {
        // Fetch all tasks from the database
        const getAllData = await Task.find();

        // Send the tasks as a JSON response
        res.status(200).json(getAllData);  // 200 is for successful GET requests
    } catch (error) {


        // Send a 500 server error response with an error message
        res.status(500).json({ msg: 'Server Error', error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
      const { id } = req.params;  // Get the ID from the request parameters
      
      // Find and delete the task by ID
      const deletedTask = await Task.findByIdAndDelete(id);
      
      if (!deletedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };

 // Update Task
exports.updateTask = async (req, res) => {
    const { title, description, dueDate, priority } = req.body;
    const { id } = req.params;
    console.log(id)
    try {
      const updatedTask = await Task.findByIdAndUpdate(id, {
        title,
        description,
        dueDate,
        priority
      }, { new: true });
  
      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      return res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
      console.error('Error updating task:', error);
      return res.status(500).json({ message: 'Server error' });
    }

  };
  