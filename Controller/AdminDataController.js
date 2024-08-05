const mongoose = require('mongoose');
const TestResult = require('../Models/TestSchema');
const User = require("../Models/UserSchema");

const AdminDataController = async (req, res) => {
  try {
    const results = await User.aggregate([
      {
        $lookup: {
          from: "testresults",               // The collection to join
          let: { userId: { $toString: "$_id" } }, // Create a variable `userId` that converts `_id` to a string
          pipeline: [                        // Use a pipeline to filter the `testresults` collection
            { $match: { $expr: { $eq: ["$id", "$$userId"] } } } // Match documents where the `id` field equals `userId`
          ],
          as: "userinfo"                     // The name of the array field to add to the output documents
        }
      }
    ])
    

    console.log('Aggregation Results:', results); // Log results to debug
    res.json(results);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Server error');
  }
};

module.exports = AdminDataController;
