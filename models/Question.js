const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    default: [4]
  },
  answer: {
    type: Number,
    required: true
  }
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
