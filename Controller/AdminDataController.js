const mongoose = require('mongoose');
const TestResult = require('../Models/TestSchema');
const User = require("../Models/UserSchema");

const AdminDataController = async (req, res) => {
  try {
    const results = await User.aggregate([
      {
        $lookup: {
          from: "testresults", 
          let: { userId: { $toString: "$_id" } }, 
          pipeline: [                        
            { $match: { $expr: { $eq: ["$id", "$$userId"] } } } 
          ],
          as: "userinfo"         
        }
      }
    ])
    console.log('Aggregation Results:', results);
    res.json(results);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Server error');
  }
};

module.exports = AdminDataController;
