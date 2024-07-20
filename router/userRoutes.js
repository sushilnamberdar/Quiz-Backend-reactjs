const express = require('express');
const { saveUserDetails, savetestdetails } = require('../Controller/userController');


const router = express.Router();

router.post('/userdetails',saveUserDetails);

router.post('/testresult',savetestdetails);

module.exports = router;