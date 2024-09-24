const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
});

const role = mongoose.model('role', roleSchema);
module.exports = role;