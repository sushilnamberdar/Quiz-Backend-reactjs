const User = require('../Models/UserSchema');
const testResult = require('../Models/TestSchema')
const moment = require('moment') // for saave the data and time in the database


const saveUserDetails = async(req,res) => {
    const {name,email,mobileno } = req.body;

    console.log("Request Body=: ", req.body)
    email = email.toLowerCase();

    const emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilvalidation = /^[0-9]{10}$/;
    if(!emailvalidation.test(email)) {
        return res.status(400).json({message:"Invalid email Format"});
    }
    console.log("checking the mobile number")
    if(!mobilvalidation.test(mobileno)) {
        return res.status(400).json({message:"Invalid Mobile Number Format"});
    }
    

    try{
        let existingUser = await User.findOne({ $or: [{ email }, { mobileno }] });

            console.log("existing User",existingUser);
            if (existingUser) {
                
                if (existingUser.email === email.toLowerCase() && existingUser.mobileno == mobileno) {
                    console.log('Welcome back');
                    return res.status(200).json({ message: 'Welcome Back',existingUser});
                } else if (existingUser.email === email) {
                    return res.status(400).json({ message: 'Phone number is incorrect' });
                } else {
                    return res.status(400).json({ message: 'Email or phone number Wrong' });
                }
            }

        const newUser = new User({
            name,
            email,
            mobileno,
            
        })

        await newUser.save();
        console.log('User saved successfully');
        res.send({message:'Welcome to the Quiz App',existingUser:newUser});
        

    } catch (error) {
        console.log('Error while saving user details',error);
        res.status(500).json({message:'Internal server error'});
    }

}


const savetestdetails = async(req,res) => {
    try{
        const {id,numOfQuestion,numOfCorrectQuestion,percentage} = req.body;
        console.log(req.body);
        const test_result = new testResult({
            id,
            numOfQuestion,
            numOfCorrectQuestion,
            percentage,
            testTakenAT: moment().format('YYYY-MM-DD HH:mm:ss'),
        })
        await test_result.save();

        console.log("result save successfull");




    }catch(error){
        console.log("Error while saving user details",error);
        res.status(500).json({message:'internal server error'});
    }

}

module.exports = { saveUserDetails ,savetestdetails}