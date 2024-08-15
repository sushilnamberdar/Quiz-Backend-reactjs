const mongoose = require('mongoose');
const QuizQuestion = require('../Models/QuestionSchema'); 

const Questionfilejson = async (req, res) => {
    console.log('req in file upload json ', req.body)
    try {
        
        const questions = req.body;

    
        if (!Array.isArray(questions) || questions.length === 0) {
            return res.status(400).json({ message: 'Invalid JSON file.' });
        }


        for (const question of questions) {
            const { Questions, A, B, C, D, Ans, TOPIC } = question;

            // Validate if each field exists
            if (!Questions || !A || !B || !C || !D || !Ans || !TOPIC) {
                return res.status(400).json({ message: 'Incomplete question data in JSON file.' });
            }

            // pick question one by one and save 
            const newQuestion = new QuizQuestion({
                Questions,
                A,
                B,
                C,
                D,
                Ans,
                TOPIC
            });

         
            await newQuestion.save();
        }

      
        res.status(201).json({ message: 'JSON file data sent successfully!' });
    } catch (error) {
      
        res.status(500).json({ message: 'An error occurred while uploading the JSON file.', error });
    }
};

module.exports = Questionfilejson;
