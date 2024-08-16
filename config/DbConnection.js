const mongoose = require('mongoose');

const db_URI = process.env.db_URI;
console.log(db_URI,"db url in ")
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