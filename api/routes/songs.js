const Router = require('express-promise-router')
const songService = require('../services/songsService')

const db = require('../db')
const router = new Router()

module.exports = router

router.get('/', async (req, res) => {
    res.json(await songService.all(db, req.query.country))
})

router.get('/artist', async (req, res) => {
    res.json(await songService.artistAggregate(db, req.query.name))
})