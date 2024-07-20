const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    id :{
        type : String,
        required : true
    },
    numOfQuestion:{
        type: Number,
        require:true
    },
    numOfCorrectQuestion:{
        type: Number,
        require:true
    },
    percentage:{
        type:Number,
        require:true
    },
    testTakenAT:{
        type:Date,
        require:true,
     
    }
})

const testResult = mongoose.model('testResult',testSchema);

module.exports = testResult;