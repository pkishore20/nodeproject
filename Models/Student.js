const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
  },
  phno: {
    type: Number,
    required: true
  },
});

const student = mongoose.model('student', StudentSchema);
module.exports = student;