const attendance = require('../Models/Attendance');

exports.getAllAttendance= async (req, res) => {
    try {
      const results = await attendance.find();
      res.send({
        status_code: 200,
        message: "Attendance Reterived successfully",
        data: results,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  exports.createNewAttendance = async (req, res) => {
      try {
          const {users_info_id, date, in_time, out_time} = req.body;
  
          const inTimeParts = in_time.split(':');
          const outTimeParts = out_time.split(':');
  
          const inTime = new Date(date);
          inTime.setHours(inTimeParts[0], inTimeParts[1], inTimeParts[2] || 0);  
  
          const outTime = new Date(date);
          outTime.setHours(outTimeParts[0], outTimeParts[1], outTimeParts[2] || 0);  
  
          const differenceInMs = outTime - inTime;
  
          const totalSeconds = Math.floor(differenceInMs / 1000);
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;
            
          const total_hours = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
          const newData = {
            users_info_id,
            date,
            in_time,
            out_time,
            total_hours, 
          };
  
          const createdData = await attendance.create(newData);
  
          res.send({
            status_code: 200,
            message: "Attendance Created successfully",
            data: createdData,
          });
          
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
  };
  

  exports.findAttendanceById= async (req, res) => {
    try {
      const id = req.params.id;    
      const attendance_data = await attendance.findById(id);

      if (!attendance_data) {
        throw createError(404, 'Attendance does not exist.');
      }
      res.send({
        status_code: 200,
        message: "Attendance Reterived successfully",
        data: attendance_data,
      });   
     } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updateAAttendance= async (req, res,) => {
    try {
  
       
        const _id =req.params.id;
        const {users_info_id, date, in_time, out_time} = req.body;

        const inTimeParts = in_time.split(':');
          const outTimeParts = out_time.split(':');
  
          const inTime = new Date(date);
          inTime.setHours(inTimeParts[0], inTimeParts[1], inTimeParts[2] || 0);  
  
          const outTime = new Date(date);
          outTime.setHours(outTimeParts[0], outTimeParts[1], outTimeParts[2] || 0);  
  
          const differenceInMs = outTime - inTime;
  
          const totalSeconds = Math.floor(differenceInMs / 1000);
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const seconds = totalSeconds % 60;
            
          const total_hours = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;


        const newData = {
            users_info_id,
            date,
            in_time,
            out_time,
            total_hours, 
          };
   
        const updatedData  = await attendance.findByIdAndUpdate(_id, newData);
        const data = await attendance.findById(_id);
  
      res.send({
        status: 200,
        response: "Attendance update successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deleteAAttendance= async (req, res,) => {
      try {
      const id = req.params.id;
      const result = await attendance.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'attendance does not exist.');
      }
      res.send({
          status_code: 200,
          message: "attendance deleted successfully",
        });
    } catch (error) {
      res.status(500).json({ error: error.message });

    }
  };