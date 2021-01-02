const {Pool} = require("pg")
const config = require("../config")


const pool = new Pool({
    connectionString: config.db_uri
})


module.exports = {
    query: (text, params) => pool.query(text, params)
}