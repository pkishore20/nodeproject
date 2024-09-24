const user = require('../Models/User');

exports. getAllUser= async (req, res) => {
    try {
      const results = await user.find();
      res.send({
        status_code: 200,
        message: "Students Reterived successfully",
        data: results,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.createNewUser= async (req, res, ) => {
    try {
      const { name, email ,mobile_no} = req.body;
      const newData = {
        name,
        email,
        mobile_no
      };
      const createdData = await user.create(newData);  
      res.send({
        status_code: 200,
        message: "Student Created successfully",
        data: createdData,
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  };

  exports.findUserById= async (req, res) => {
    try {
      const id = req.params.id;    
      const student_data = await user.findById(id);

      if (!student_data) {
        throw createError(404, 'Student does not exist.');
      }
      res.send({
        status_code: 200,
        message: "Students Reterived successfully",
        data: student_data,
      });   
     } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateAUser= async (req, res,) => {
    try {
  
       const _id =req.params.id;
       const { name, email ,mobile_no} = req.body;
       const newData = {
         name,
         email,
         mobile_no
       };
  
       const updatedData  = await user.findByIdAndUpdate(_id, newData);
       const data = await user.findById(_id);
  
      res.send({
        status: 200,
        response: "Student update successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deleteAUser= async (req, res,) => {
    const id = req.params.id;
    try {
      const result = await user.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Student does not exist.');
      }
      res.send({
          status_code: 200,
          message: "Student deleted successfully",
        });
    } catch (error) {
      res.status(500).json({ error: error.message });

    }
  };