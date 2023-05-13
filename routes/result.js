const express = require('express');
const router = express.Router();
const { getAllResults, markResult } = require('../controllers/result');

// Route to get all results
router.get('/', getAllResults);

// Route to mark result for a student's interview
router.put('/:interviewId/:studentId/mark', markResult);

module.exports = router;
