const { Task } = require('../models');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching tasks.' });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the task.' });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = await Task.create({ title, description, dueDate });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the task.' });
  }
};

// Update an existing task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.update({ title, description, dueDate });
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the task.' });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.destroy();
      res.status(200).json({ message: 'Task deleted.' });
    } else {
      res.status(404).json({ error: 'Task not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the task.' });
  }
};
