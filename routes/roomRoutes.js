const express = require("express")
const router = express.Router()
const roomController = require("../controllers/roomController")





router.route("/api/rooms")
    .get(
        roomController.list
    )


router.route("/api/rooms/:room_id/admission")
    .post(
        roomController.admission
    )

router.route("/api/rooms/:room_id/discharge")
    .post(
        roomController.discharge
    )





module.exports = router