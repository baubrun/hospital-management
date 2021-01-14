const express = require("express")
const router = express.Router()
const patientController = require("../controllers/patientController")




router.route("/api/patients")
    .get(patientController.list)
    .post(
        patientController.create
    )


router.route("/api/patients/read")
    .post(patientController.read)


router.route("/api/patients/waiting")
    .get(patientController.listWaiting)



    router.route("/api/patients/:patient_id/admission")
    .post(
        patientController.admission
    )

router.route("/api/patients/:patient_id/discharge")
    .post(
        patientController.discharge
    )


module.exports = router