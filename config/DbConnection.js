const mongoose = require('mongoose');

const db_URI = process.env.db_URI;

const dbConnection = () => {

    
    mongoose.connect(db_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true, 

    }).then(()=> {
        console.log("Connected to Database")
    }).catch((Error)=> {
        console.log(Error)
    })
}
module.exports = dbConnection;