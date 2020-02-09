const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  quiz_id: {
    type: Number,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  marks: {
    type: Number,
    required: true
  },
  answer: {
      type: Array,
      default: []
  }
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;
