const db = require("../db");




const list = async (req, res) => {
    try {
  
      const rooms = await db.query(
        `SELECT * from rooms`
      );
      return res.status(200).json({
        rooms: rooms.rows,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message
      });
    }
  };


  
  module.exports = {
    list,
 
  };
  