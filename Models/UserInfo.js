const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Role = require('../Models/Role'); // 
const User = require('../Models/User'); //
const Department = require('../Models/Department');

const userInfoSchema = new Schema({
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'Role', 
        required: true,
        unique: true
      },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
      },
      departmentID: {
        type: Schema.Types.ObjectId,
        ref: 'Department', 
        required: true
      },
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema);
module.exports = UserInfo;