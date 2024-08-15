const express = require('express');
const app = express();
require('dotenv').config();
const dbConnection = require("./config/DbConnection")
dbConnection();
const cors = require('cors');

    app.use(cors());
    app.use(express.json({
        limit:'10mb'
    }));

    const router = require('./router/userRoutes')
    app.use(router);




const  PORT = process.env.PORT || 8971;




app.listen(PORT,()=> {
    console.log((`server is running on the Port ${PORT} `))
})
