require("dotenv/config")


module.exports = {
    pgUri: process.env.DATABASE_URI,
    PORT: process.env.PORT  || 5000,
}