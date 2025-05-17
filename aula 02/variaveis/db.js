const { Pool } = require('pg')
require('dotenv').config()

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    max: 10,
    idleTimeoutMillis: 30000
}

const pool = new Pool(dbConfig)

const query = async (text, params) => {
    return await pool.query(text, params)
}

const close = async () => {
    await pool.end()
}

module.exports = {query, close}
