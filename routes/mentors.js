//Mentor Router
//Imports
var express = require('express');
var router = express.Router();
//Mentor Module Imports
var mentorModule = require('../Modules/Mentor')
/* GET users listing. */

//Routes
//route to create mentor
router.post('/create',mentorModule.postMentor)
//route to add student to mentor
router.put('/addStudent',mentorModule.addStudent)
//route to remove student from mentor
router.put('/removeStudent',mentorModule.deleteStudent)
//route to get all students assigned to a mentor
router.get('/:id/getStudents',mentorModule.getStudents);
router.get('/getMentor',mentorModule.getMentors);

module.exports = router;
