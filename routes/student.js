const express = require('express');
const router = express.Router();
const { getAllStudents, createStudent } = require('../controllers/student');

// Route to get all students
router.get('/', getAllStudents);

// Route to create a new student
router.post('/', createStudent);

module.exports = router;
