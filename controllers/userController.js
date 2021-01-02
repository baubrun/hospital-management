
const db = require("../db");
const bcrypt = require("bcryptjs")
const {SALT} = require("../config")

const create = async (req, res) => {
    const {
      user_name,
      first_name,
      last_name,
      password,
      email,
      occupation,
    } = req.body;
  
    const text = "INSERT INTO users(user_name, first_name, last_name, password, email, occupation)";
    const values = "VALUES($1, $2, $3, $4, $5, $6) ON CONFLICT ON CONFLICT (email OR user_name)";
    const returning = "RETURNING id, first_name, last_name, occupation";
  
    const hashedPassword = await bcrypt.hash(password, SALT)

    try {
      const user = await db.query(`${text} ${values} ${returning}`, [
        user_name,
        first_name,
        last_name,
        hashedPassword,
        email,
        occupation,
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