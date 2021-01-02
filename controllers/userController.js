
const db = require("../db");

const create = async (req, res) => {
    const {
      user_name,
      first_name,
      last_name,
      password,
      email,
      department,
      access_level,
    } = req.body;
  
    const text = "INSERT INTO users(user_name, first_name, last_name, password, email, department)";
    const values = "VALUES($1, $2, $3, $4, $5, $6)";
    const returning = "RETURNING id, user_name, access_level, department";
  
    try {
      const user = await db.query(`${text} ${values} ${returning}`, [
        user_name,
        first_name,
        last_name,
        password,
        email,
        department,
        access_level,
        ]);
      return res.status(200).json({
        user: user.rows[0]
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message
      });
    }
  };
  

  module.exports = {
    create,
 
  };