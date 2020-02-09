const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  subject: {
    type: String,
    required: true
  },
  duration: {
    type: Date,
    default: Date.now
  },
  marks: {
    type: Number,
    required: true
  },
  questions: {
    type: Array,
    default: []
  }
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
