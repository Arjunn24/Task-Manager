const mongoose = require('mongoose')

const taskschema = new mongoose.Schema({
name : {
    type :String,
    required : [true,'name must be provided'],
    trim : true,
    maxlength :[20,'length cant exceed 20 characters'],
}    ,
completed : {
    type : Boolean,
    default : false,
},
})

module.exports=mongoose.model('Task',taskschema)
