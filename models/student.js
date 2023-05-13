const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  batch: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['placed', 'not_placed'],
    required: true
  },
  courseScores: {
    DSAFinalScore: {
      type: Number,
      required: true
    },
    WebDFinalScore: {
      type: Number,
      required: true
    },
    ReactFinalScore: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Student', studentSchema);
