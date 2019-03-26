const { Pool } = require('pg')

const pool = new Pool()

module.exports = {
    query: async (text, params) => {
        const start = Date.now()
        const res = await pool.query(text, params)
        const duration = Date.now() - start
        console.log({text, duration, rowCount: res.rowCount})
        return res
    },
    getClient: () => {
        return pool.connect()
    }
}