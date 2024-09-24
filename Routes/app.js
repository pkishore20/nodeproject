const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/UserController.js');
const DepartmentController = require('../Controllers/DepartmentController.js');
const RoleController = require('../Controllers/RoleController.js');
const AttendanceController = require('../Controllers/AttendanceController.js');
const AuthController = require('../Controllers/AuthController.js');

router.route('/user/create').post(UserController.createNewUser);
router.route('/user/list').get(UserController.getAllUser);
router.route('/user/show/:id').get(UserController.findUserById);
router.route('/user/update/:id').patch(UserController.updateAUser);
router.route('/user/delete/:id').delete(UserController.deleteAUser);

router.route('/department/create').post(DepartmentController.createNewDepartment);
router.route('/department/list').get(DepartmentController.getAllDepartment);
router.route('/department/show/:id').get(DepartmentController.findDepartmentById);
router.route('/department/update/:id').patch(DepartmentController.updateADepartment);
router.route('/department/delete/:id').delete(DepartmentController.deleteADepartment);

router.route('/role/create').post(RoleController.createNewRole);
router.route('/role/list').get(RoleController.getAllRole);
router.route('/role/show/:id').get(RoleController.findRoleById);
router.route('/role/update/:id').patch(RoleController.updateARole);
router.route('/role/delete/:id').delete(RoleController.deleteARole);

router.route('/attendance/create').post(AttendanceController.createNewAttendance);
router.route('/attendance/list').get(AttendanceController.getAllAttendance);
router.route('/attendance/show/:id').get(AttendanceController.findAttendanceById);
router.route('/attendance/update/:id').patch(AttendanceController.updateAAttendance);
router.route('/attendance/delete/:id').delete(AttendanceController.deleteAAttendance);


router.route('/register').post(AuthController.register);
router.route('/login').get(AuthController.login);


module.exports = router;