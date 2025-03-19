const UserInfo = require('../Models/UserInfo'); 
const Role = require('../Models/Role');
const Department = require('../Models/Department');
const User = require('../Models/User');

exports.storeUserInfo = async (req, res) => {
  try {
    const { userId, departmentID, roleId } = req.body; 
    
    const results = await UserInfo.create({ userId, departmentID, roleId });
    const roleData = await Role.findById(roleId);
    const userData = await User.findById(userId);
    const departmentData = await Department.findById(departmentID);

    const responseData = {
      _id: results._id,
      roleId: results.roleId,
      role: roleData.role,
      userId: results.userId,
      user: userData.name, 
      departmentID: results.departmentID,
      department: departmentData.department, 
    };


    res.status(200).json({
      status_code: 200,
      message: "UserInfo stored successfully",
      data: responseData,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.deleteUserInfo= async (req, res) => {
    const id = req.params.id;
    try {
      const result = await UserInfo.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'UserInfo does not exist.');
      }
      res.send({
          status_code: 200,
          message: "UserInfo deleted successfully",
        });
    } catch (error) {
      res.status(500).json({ error: error.message });

    }
  };