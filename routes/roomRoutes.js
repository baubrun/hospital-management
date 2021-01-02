const express = require("express")
const router = express.Router()
const roomController = require("../controllers/roomController")





router.route("/rooms")
    .get(
        roomController.list
    )





module.exports = router