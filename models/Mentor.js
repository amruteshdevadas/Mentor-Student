//Mentor Data Model
//imports
//Defining Schema
const mongoose = require("mongoose");
const schema = mongoose.Schema;

//storing name and Students in an array which refer to the Student model
const authorSchema = new schema({
    
    name:{
        type: String,
        required: true
    },
    students:[
        {
            type: mongoose.Schema.Types.ObjectId, ref: "students"
        }
    ]
 
});

const Author = mongoose.model("Authors", authorSchema, "authors");
module.exports = Author;
