const express = require('express');
const {
  createTask,
  getTask,
  getTasks,
  deleteTask,
  updateTask
} = require('../controllers/taskController')
const router = express.Router();

// Get all tasks
router.get('/', getTasks);

// Get a single task
router.get('/:id', getTask)

// POST a new task
router.post('/', createTask)

// DELETE a new task
router.delete('/:id', deleteTask)

// PATCH a new task
router.patch('/:id', updateTask)


module.exports = router;
