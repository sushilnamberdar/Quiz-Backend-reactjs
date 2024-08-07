const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  Questions: {
    type: String,
    required: true,
  },
  A: {
    type: String,
    required: true,
  },
  B: {
    type: String,
    required: true,
  },
  C: {
    type: String,
    required: true,
  },
  D: {
    type: String,
    required: true,
  },
  Ans: {
    type: String,
    required: true,
  },
  TOPIC: {
    type: String,
    required: true,
  },
}, { collection: 'quizquestion' });

module.exports = mongoose.model('QuizQuestion', questionSchema);
