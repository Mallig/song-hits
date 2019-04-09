const Router = require('express-promise-router')

const db = require('../db')
const router = new Router()

module.exports = router

router.get('/', async (req, res) => {
    const { rows } = await db.query('SELECT position, artist, song FROM songs;')
    res.json(rows)
})

router.get('/artist', async (req, res) => {
    let artist = req.query.name
    let { rows } = await db.query(`SELECT song, score FROM songs WHERE artist LIKE '${artist}';`)
    let songCount = rows.length
    let score = 0
    for (let i=0; i<songCount; i++) {
        score += rows[i].score
    }
    res.json({"artist": artist, "number of songs": songCount, "total score": score})
})