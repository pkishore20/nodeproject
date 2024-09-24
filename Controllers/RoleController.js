const role = require('../Models/Role');

exports. getAllRole= async (req, res) => {
    try {
      const results = await role.find();
      res.send({
        status_code: 200,
        message: "Role Reterived successfully",
        data: results,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.createNewRole= async (req, res, ) => {
    try {
      const role_data = req.body.role;


      const roledata = new role({ role: role_data});

      const createdData = await roledata.save();
      res.send({
        status_code: 200,
        message: "Role Created successfully",
        data: createdData,
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  exports.findRoleById= async (req, res) => {
    try {
      const id = req.params.id;    
      const role_data = await role.findById(id);

      if (!role_data) {
        throw createError(404, 'role does not exist.');
      }
      res.send({
        status_code: 200,
        message: "roles Reterived successfully",
        data: role_data,
      });   
     } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateARole= async (req, res,) => {
    try {
  
       const _id =req.params.id;
       const role_data  = req.body.role;
     
       const updatedData  = await role.findByIdAndUpdate(_id, role_data);
       const data = await role.findById(_id);
  
      res.send({
        status: 200,
        response: "Role update successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deleteARole= async (req, res,) => {
    const id = req.params.id;
    try {
      const result = await role.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'role does not exist.');
      }
      res.send({
          status_code: 200,
          message: "role deleted successfully",
        });
    } catch (error) {
      res.status(500).json({ error: error.message });

    }
  };