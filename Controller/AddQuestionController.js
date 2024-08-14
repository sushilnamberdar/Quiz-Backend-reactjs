const mongoose = require('mongoose');
const QuizQuestion = require('../Models/QuestionSchema'); 

const AddQuestionController = async (req, res) => {
    try {
        
        const { Questions, A, B, C, D, Ans, TOPIC } = req.body;

        // Create a new question document
        const newQuestion = new QuizQuestion({
            Questions,
            A,
            B,
            C,
            D,
            Ans,
            TOPIC
        });

        // Save the new question to the database
        await newQuestion.save();

        res.status(201).json({ message: 'Question added successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while adding the question.', error });
    }
};

module.exports = AddQuestionController;
