const Task = require('../models/taskModel')

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }   
}

// @desc    Create a new task
// @route   POST /api/tasks 
// @access  Public
const createTask = async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    try {
        const newTask = new Task({ title });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// @desc    Update a task's status
// @route   PUT /api/tasks/:id
// @access  Public
const updateTaskStatus = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id, 
            { status: req.body.status }, 
            { new: true, runValidators: true } // Returns the updated doc and runs schema checks
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getTasks,
    createTask,
    updateTaskStatus
}