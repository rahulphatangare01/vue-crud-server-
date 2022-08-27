
const mongoose  = require('mongoose');

const studentSchema =  new mongoose.Schema ({
    name:{type:String},
    age:{type:Number},
    Class:{type:String},
    phone:{type:Number}
})

const Student = mongoose.model('student', studentSchema);
module.exports = Student