//Student Module
//imports
var express = require('express');
var router = express.Router();
var studentModule = require('../Modules/Student');


/* GET users listing. */

//router to create a student
router.post('/create',studentModule.postStudent);
//router to get all students who are not assigned to a mentor
router.get('/getStudents',studentModule.getStudents);


module.exports = router;
