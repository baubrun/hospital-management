const {
    Pool
} = require('pg')
const config = require("../config")

const pool = new Pool({
    connectionString: config.DB_URI,
    ssl: {
        rejectUnauthorized: false,
      },
})


module.exports = {
    query: (text, params) => pool.query(text, params)
}