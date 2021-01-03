const db = require("../db");

const create = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        discharge,
        medicalHistory,
        careLevel,
    } = req.body;


    const text = "INSERT INTO patients(first_name, last_name, email, discharge, medical_history, care_level)";
    const values = "VALUES($1, $2, $3, $4, $5, $6) ON CONFLICT (email) DO NOTHING";
    const returning = "RETURNING patient_id, first_name, last_name, email, admission, discharge, medical_history";

    try {
        const patient = await db.query(`${text} ${values} ${returning}`, [
            firstName,
            lastName,
            email,
            discharge,
            medicalHistory,
            careLevel,
            ]);

            // console.log("patient :>> ", patient.rows[0])
        return res.status(200).json({
            patient: patient.rows[0]
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