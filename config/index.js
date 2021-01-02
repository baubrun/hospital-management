require("dotenv/config")


module.exports = {
    db_uri: process.env.DATABASE_URI,
    PORT: process.env.PORT  || 5000,
}