const db = require("../db");




const list = async (req, res) => {
  
    try {
      const text = `SELECT * from rooms ,`;
  
      const rooms = await db.query(
        text,
        [rooms]
      );
      return res.status(200).json({
        rooms: rooms.rows[0],
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
  