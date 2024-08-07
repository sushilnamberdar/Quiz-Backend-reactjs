// controllers/questionController.js
const QuizQuestion = require('../Models/QuestionSchema');

const getQuizQuestions = async (req, res) => {
  try {
    const results = await QuizQuestion.find();
    console.log(results);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching quiz questions' });
  }
};

module.exports = getQuizQuestions;
