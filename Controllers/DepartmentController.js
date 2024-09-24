const department = require('../Models/Department');

exports.getAllDepartment= async (req, res) => {
    try {
      const results = await department.find();
      res.send({
        status_code: 200,
        message: "Department Reterived successfully",
        data: results,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.createNewDepartment = async (req, res) => {
    try {


      const department_data = req.body.department;

      const newDepartment = new department({ department: department_data});

      const createdData = await newDepartment.save();

      res.status(200).send({
          status_code: 200,
          message: "Department created successfully",
          data: createdData,
      });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

  exports.findDepartmentById= async (req, res) => {
    try {
      const id = req.params.id;  
      
      const department_data = await department.findById(id);

      if (!department_data) {
        throw createError(404, 'department does not exist.');
      }
      res.send({
        status_code: 200,
        message: "departments Reterived successfully",
        data: department_data,
      });   
     } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateADepartment= async (req, res,) => {
    try {
  
      const _id = req.params.id; 
      const departmentData = req.body.department;  

      const updatedData = await department.findByIdAndUpdate( _id,{ department: departmentData });

      if (!updatedData) {
          return res.status(404).send({ status: false, message: "Department not found" });
      }

      res.send({
        status: 200,
        response: "Department update successfully",
        data: updatedData,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deleteADepartment= async (req, res,) => {
    const id = req.params.id;
    try {
      const result = await department.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'department does not exist.');
      }
      res.send({
          status_code: 200,
          message: "Department deleted successfully",
        });
    } catch (error) {
      res.status(500).json({ error: error.message });

    }
  };