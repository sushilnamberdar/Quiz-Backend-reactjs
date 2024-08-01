const express = require('express');
const { saveUserDetails, savetestdetails } = require('../Controller/userController');
const adminLogin = require('../Controller/adminController');


const router = express.Router();

router.post('/userdetails',saveUserDetails);

router.post('/testresult',savetestdetails);
router.post('/admin',adminLogin);
router.get('/admin',)

module.exports = router;