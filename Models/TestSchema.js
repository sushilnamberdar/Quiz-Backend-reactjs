const mongoose = require('mongoose');

const testResultSchema = new mongoose.Schema({
    id: { type: String, required: true },
    numOfQuestion: { type: Number, required: true },
    numOfCorrectQuestion: { type: Number, required: true },
    percentage: { type: Number, required: true },
    testTakenAT: { type: Date, default: Date.now },
    attemptedQuestions: [{
      status: { type: String, required: true },
      answer: { type: String, required: true },
      correctAnswer: { type: String, required: true },
      Questionid: { type: String, required: true },
    }],
  });
  
const testResult = mongoose.model('testResult', testResultSchema);

module.exports = testResult;
