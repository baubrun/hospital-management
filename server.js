const express = require("express")
const cors = require("cors")
const app = express()
const config = require("./config")
const roomsRoutes = require("./routes/roomsRoutes")

app.use(express.json())
app.use(cors())

app.use("/", express.static("build"))

app.use("/", roomsRoutes)



const port = config.PORT




app.listen(port, () => {
    console.log(`\nServer running on port ${port}!\n`)
})


