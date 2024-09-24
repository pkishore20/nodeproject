const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
    users_info_id: {
      type: String,
      required: true,
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