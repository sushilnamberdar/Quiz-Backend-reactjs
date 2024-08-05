const { ObjectId } = require('mongodb');
const testResult = require('../Models/TestSchema');

const deleteTestResult = async (req, res) => {
  const testId  = req.body.id;
  console.log("req in delete controller", req.body);

  try {
    await testResult.deleteOne({ _id:`${testId}`});
    res.status(200).send('Test result deleted successfully');
  } catch (error) {
    console.error('Error deleting the test result', error);
    res.status(500).send('Error deleting the test result');
  }
};

module.exports = deleteTestResult;
