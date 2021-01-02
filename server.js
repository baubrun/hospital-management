const express = require("express")
const cors = require("cors")
const app = express()
const config = require("./config")


app.use(express.json())
app.use(cors())

app.use("/", express.static("build"))




const port = config.PORT




app.listen(port, () => {
    console.log(`\nServer running on port ${port}!\n`)
})


