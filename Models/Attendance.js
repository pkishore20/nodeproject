const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../Models/User');

const AttendanceSchema = new Schema({
    users_id: {
      type: Schema.Types.ObjectId,
      ref: 'User', 
      required: true
    },
    date: {
      type: Date,
      required: true,
    },
    in_time: {
      type: String,  
      required: true,
    },
    out_time: {
      type: String,  
      required: true,
    },
    total_hours: {
      type: String,  
      required: false,
    },
  });

const Attendance = mongoose.model('Attendance', AttendanceSchema);
module.exports = Attendance;