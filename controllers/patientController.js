const db = require("../db");

const create = async (req, res) => {
    const {
        firstName,
        lastName,
        insuranceNumber,
        discharge,
        medicalHistory,
        careLevel,
    } = req.body;


    const text = "INSERT INTO patients(first_name, last_name, insurance_number, discharge, medical_history, care_level)";
    const values = "VALUES($1, $2, $3, $4, $5, $6) ON CONFLICT (insurance_number) DO NOTHING";
    const returning = "RETURNING patient_id, first_name, last_name, insurance_number, admission, discharge, medical_history";

    try {
        const patient = await db.query(`${text} ${values} ${returning}`, [
            firstName,
            lastName,
            insuranceNumber,
            discharge,
            medicalHistory,
            careLevel,
        ]);

        return res.status(200).json({
            patient: patient.rows[0]
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};



const list = async (req, res) => {
    try {
        const patients = await db.query(
            "SELECT * FROM patients WHERE discharge IS NULL",
        );

        return res.status(200).json({
            patients: patients.rows
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};



const listWaiting = async (req, res) => {

    const text = "SELECT patient_id, first_name, last_name, care_level FROM patients LEFT JOIN ROOMS ON patients.patient_id = rooms.occupant_id  WHERE occupant_id IS NULL"
    try {
        const waitingPatients = await db.query(text);
        return res.status(200).json({
            waitingPatients: waitingPatients.rows
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};


const read = async (req, res) => {
    const {
        first_name,
        last_name
    } = req.body
    
    try {
        const patient = await db.query(
            `SELECT
            first_name, last_name, care_level, admission, discharge, room_number, occupied
         FROM patients
         LEFT JOIN rooms 
             ON patients.patient_id = rooms.occupant_id
            WHERE first_name = $1 AND last_name = $2
         `,
            [first_name, last_name]

        );
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
    list,
    listWaiting,
    read,
};