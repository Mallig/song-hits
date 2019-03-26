const Router = require('express-promise-router')

const db = require('../db')
const router = new Router()

module.exports = router

router.get('/', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE=\'BASE TABLE\';')
    res.send(rows[0])
})