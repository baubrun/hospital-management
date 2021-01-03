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


  const admission = async (req, res) => {
    
    const {occupant_id, room_number, occupied} = req.body

    try {
      const text = 
      `UPDATE rooms SET occupant_id = $2, occupied = $3 WHERE room_number = $1 AND occupied != $3`
      const returning = "RETURNING room_number, short_stay, long_stay, occupied, occupant_id"
      
        const rooms = await db.query(
        `${text} ${returning}`,
      [room_number, occupant_id, occupied]
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



  const discharge = async (req, res) => {

    const {room_id} = req.params

    try {
      const text = `UPDATE rooms SET occupant_id = NULL WHERE room_number = $1`
        const returning = "RETURNING room_number, short_stay, long_stay, occupied, occupant_id"
      
        const rooms = await db.query(
        `${text} ${returning}`,
      [room_id]
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
    admission,
    list,
    discharge,
  };
  