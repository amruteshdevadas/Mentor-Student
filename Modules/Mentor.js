// Mentor Module 
// Data Models import
var Mentor = require("../models/Mentor");
var Student = require("../models/Students");

//function to add a mentor
exports.postMentor = async function (req, res) {
  var mentor = new Mentor({
    name: req.body.name,
  });
  try {
    await mentor.save();
    res.json({
      message: "Mentor created!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

//function to add stydents to a mentor
exports.addStudent = async function (req, res) {
  try {
    var result = await Mentor.findByIdAndUpdate(req.body.id, {
      $push: { students: req.body.studentId },
    });

    await Student.findByIdAndUpdate(req.body.studentId, {
      mentorAssigned: true,
    })
    res.json({
      message: "Student added!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

//function to remove a student from a mentor
exports.deleteStudent = async function (req, res) {

    try {
        var result = await Mentor.findByIdAndUpdate(req.body.id, {
        $pull: { students: req.body.studentId },
        });
        await Student.findByIdAndUpdate(req.body.studentId, {
        mentorAssigned: false,
        })
        res.json({
          message: "Student removed!",
        });
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
}

//function to get all the students assigned to a mentor
exports.getStudents = async function (req, res) {
;
console.log(req.params.id)
  try {
    var result = await Mentor.findById(req.params.id,{students:1,_id:0,}).populate({path:'students',select:'name'});
    
    if(!result){
      res.send("No students assigned to this mentor");
    }
    res.send(result);
    
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
}

exports.getMentors = async function (req,res) {
  try {
    var result = await Mentor.find({});
    if(!result){
      res.send("No mentors found");
    }
    else{
      res.send(result);
    }
    
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
}