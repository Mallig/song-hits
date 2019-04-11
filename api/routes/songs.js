const Router = require('express-promise-router')
const songService = require('../services/songsService')

const router = new Router()

module.exports = router

router.get('/', async (req, res) => {
    const country = req.query.country
    let songs = await songService.all(country)
    res.json(songs)
})

router.get('/artist', async (req, res) => {
    let artist = req.query.name
    let aggregateData = await songService.artistAggregate(artist)
    res.json(aggregateData)
})