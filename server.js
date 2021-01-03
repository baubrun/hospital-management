const express = require("express")
const cors = require("cors")
const app = express()
const config = require("./config")
const roomRoutes = require("./routes/roomRoutes")
const patientRoutes = require("./routes/patientRoutes")

app.use(express.json())
app.use(cors())

app.use("/", express.static("build"))

app.use("/", roomRoutes)
app.use("/", patientRoutes)



const port = config.PORT




app.listen(port, () => {
    console.log(`\nServer running on port ${port}!\n`)
})


