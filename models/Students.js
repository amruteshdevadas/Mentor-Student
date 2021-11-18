//Data Model for Students
//imports
//Defining Schema
const mongoose = require('mongoose');
const schema = mongoose.Schema;
//Storing Student's name and mentorAssigned to be false by default
const studentSchema = new schema({

    name:{
        type: String,
        required: true
    },
    mentorAssigned :{
        type : Boolean,
        default : false
    }

})

const Students = mongoose.model('students', studentSchema, 'students')
module.exports = Students
