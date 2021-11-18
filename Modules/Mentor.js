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
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

//function to add stydents to a mentor
exports.addStudent = async function (req, res) {
  try {
    var result = await Mentor.findByIdAndUpdateMany(req.body.id, {
      $push: { students: req.body.student },
    });

    await Student.findByIdAndUpdate(req.body.student, {
      mentorAssigned: true,
    })
    res.json({
      message: "Student added!",
    });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

//function to remove a student from a mentor
exports.deleteStudent = async function (req, res) {

    try {
        var result = await Mentor.findByIdAndUpdate(req.body.id, {
        $pull: { students: req.body.student },
        });
        await Student.findByIdAndUpdate(req.body.student, {
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

  // console.log(req.body.id);
  try {
    var result = await Mentor.findById(req.body.id,{students:1,_id:0,}).populate({path:'students',select:'name'});
    
    if(!result){
      res.send("No students assigned to this mentor");
    }
    res.send(result);
    console.log(result);
    
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
}