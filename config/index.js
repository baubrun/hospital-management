require("dotenv/config")




module.exports = {
    DB_URI: process.env.DATABASE_URI,
    PORT: process.env.PORT || 5000,
    SALT: 10,
}

