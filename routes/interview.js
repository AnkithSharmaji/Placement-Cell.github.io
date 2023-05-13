const express = require('express');
const router = express.Router();
const { getAllInterviews, createInterview, assignStudentToInterview } = require('../controllers/interview');

// Route to get all interviews
router.get('/', getAllInterviews);

// Route to create a new interview
router.post('/', createInterview);

// Route to assign a student to an interview
router.put('/:interviewId/assign', assignStudentToInterview);

module.exports = router;
