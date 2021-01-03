const express = require("express")
const router = express.Router()
const patientController = require("../controllers/patientController")





router.route("/api/patients/create")
    .post(
        patientController.create
    )




module.exports = router