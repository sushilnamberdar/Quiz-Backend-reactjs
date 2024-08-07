const express = require('express');
const { saveUserDetails, savetestdetails } = require('../Controller/userController');
const adminLogin = require('../Controller/adminController');
const AdminDataController = require('../Controller/AdminDataController');
const deleteTestResult = require('../Controller/deleteTestResult');
const adauth = require('../middleware/adauth');
const getQuizQuestions = require('../Controller/QuestionController');


const router = express.Router();

router.post('/userdetails',saveUserDetails);

router.post('/testresult',savetestdetails);
router.post('/admin',adminLogin);
router.get('/admindashboard',AdminDataController);
router.delete('/deleteTestResult', adauth, deleteTestResult); 
router.get('/questions',getQuizQuestions)
module.exports = router;