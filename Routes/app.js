const express = require('express');
const router = express.Router();

const StudentController = require('../Controllers/StudentController.js');
const AuthController = require('../Controllers/AuthController.js');

router.route('/create').post(StudentController.createNewStudent);
router.route('/list').get(StudentController.getAllStudent);
router.route('/show/:id').get(StudentController.findStudentById);
router.route('/update/:id').patch(StudentController.updateAStudent);
router.route('/delete/:id').delete(StudentController.deleteAStudent);

router.route('/register').post(AuthController.register);
router.route('/login').get(AuthController.login);


module.exports = router;