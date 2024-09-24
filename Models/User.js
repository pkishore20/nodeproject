const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: false
  },
});

const user = mongoose.model('user', userSchema);
module.exports = user;