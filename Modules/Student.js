//Student Module
// Student Model import
var Student = require("../models/Students");

//function to add a student
exports.postStudent = async function (req, res) {
  var student = new Student({
    name: req.body.name,
  });
  try {
    var result = await student.save();
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

//function to get all students who are not assigned to any mentor
exports.getStudents = async function (req, res) {

  try {
    var result = await Student.find({mentorAssigned:false},{name:1});
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};



