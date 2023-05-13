const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  interview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Interview'
  },
  status: {
    type: String,
    enum: ['PASS', 'FAIL', 'ON HOLD', 'DID NOT ATTEMPT'],
    required: true
  }
});

module.exports = mongoose.model('Result', resultSchema);
