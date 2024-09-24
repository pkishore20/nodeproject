const user = require('../Models/Auth');  
const bcrypt = require('bcrypt'); 

exports.register = async (req, res) => {

  try {
    const {email, password  } = req.body;

    const createdUser = await user.create({ email, password });

    res.send({
      statuscode: 200,
      response: "Created successfully",
      data: createdUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
    try {

      const { email, password } = req.body;

      const user_data = await user.findOne({ email });
  
      if (!user_data) {
        return res.status(400).json({ status: false, response: "Invalid email" });
      }

      const isMatch = await bcrypt.compare(password, user_data.password);
  
      if (!isMatch) {
        return res.status(400).json({ status: false, response: "Invalid password" });
      }
  
      res.json({
        statuscode: 200,
        response: "Login successful",
        data: {
          user: user_data,
        },
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};