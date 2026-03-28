const express = require('express');
const router = express.Router();
const { getTasks, createTask, updateTaskStatus } = require('../controllers/taskController');

// @route   GET /api/tasks
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTaskStatus);

module.exports = router;
