const db = require("../db");

const create = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        admission,
        discharge,
        medicalHistory,
        careLevel,
    } = req.body;

    const text = "INSERT INTO patients(first_name, last_name, email, medical_history, care_level)";
    const values = "VALUES($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (email OR user_name) DO NOTHING";
    const returning = "RETURNING patient_id, first_name, last_name, email, admission, discharge, medical_history";


    try {
        // const patient = await db.query(`${text} ${values} ${returning}`, [
        //     firstName,
        //     lastName,
        //     email,
        //     admission,
        //     discharge,
        //     medicalHistory,
        //     careLevel,
        //     ]);

        // return res.status(200).json({
        //     patient: patient.rows[0]
        // });
        console.log('req.body :>>', req.body)
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};


module.exports = {
    create,

};