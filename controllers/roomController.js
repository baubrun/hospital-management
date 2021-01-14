const db = require("../db");




const list = async (req, res) => {
  try {

    const rooms = await db.query(
      `SELECT
        first_name, last_name, care_level, admission, patient_id, room_number, occupant_id, occupied 
     FROM
         patients
     RIGHT JOIN rooms 
         ON patients.patient_id = rooms.occupant_id
     `
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

  const {
    room_number,
    occupied,
    occupant_id,
  } = req.body

  try {
    const text =
      `UPDATE rooms SET occupied = $2, occupant_id = $3 WHERE room_number = $1 AND occupied != $2 `
    const returning =
      "RETURNING room_number, short_stay, long_stay, occupied, occupant_id"

    const rooms = await db.query(
      `${text} ${returning}`,
      [room_number, occupied, occupant_id]
    );

    return res.status(200).json({
      room: rooms.rows[0],
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};



const discharge = async (req, res) => {

  const {
    room_id
  } = req.params
  try {

    await db.query(
      `UPDATE rooms 
      SET occupied = false, occupant_id = NULL
      WHERE room_number = $1
      `,
      [room_id]
    );

    return res.status(200).json({success: true});
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