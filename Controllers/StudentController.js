const student = require('../Models/Student');

module.exports = {
  getAllStudent: async (req, res) => {
    try {
      const results = await student.find();

      res.send({
        status: true,
        status_code: 200,
        message: "Students Reterived successfully",
        data: results,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createNewStudent: async (req, res, ) => {
    try {
      const { name, phno, department } = req.body;
      const newData = {
        name,
        department,
        phno,
      };
      const createdData = await student.create(newData);  
      res.send({
        status: true,
        status_code: 200,
        message: "Student Created successfully",
        data: createdData,
      });

    } catch (error) {
      res.status(500).json({ error: error.message });
    }

  },

  findStudentById: async (req, res) => {
    try {
      const id = req.params.id;    
      const student_data = await student.findById(id);

      if (!student_data) {
        throw createError(404, 'Student does not exist.');
      }
      res.send({
        status: true,
        status_code: 200,
        message: "Students Reterived successfully",
        data: student_data,
      });   
     } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateAStudent: async (req, res,) => {
    try {
  
       const _id =req.params.id;
       const { name, phno, department } = req.body;
       const newData = {
         name,
         department,
         phno,
       };
  
      const updatedData  = await student.findByIdAndUpdate(_id, newData);
      const data = await student.findById(_id);
  
      res.send({
        status: true,
        response: "Student update successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteAStudent: async (req, res,) => {
    const id = req.params.id;
    try {
      const result = await student.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Student does not exist.');
      }
      res.send({
          status: true,
          status_code: 200,
          message: "Student deleted successfully",
        });
    } catch (error) {
      res.status(500).json({ error: error.message });

    }
  }
};