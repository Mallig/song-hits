const express = require('express')
const pug = require('pug')
const songsClient = require('./songsClient')

const server = express();
const compiledFunction = pug.compileFile('template.pug')

server.set('view engine', 'pug')

server.get('/', async (req, res) => {
    const country = req.query.country
    try {
        allSongs = await songsClient.getAllSongs(country)
    } catch (error) {
        console.log(error)
    }
    res.send(compiledFunction(allSongs))
})

server.get('/artist', async (req, res) => {
    const artist = req.query.artist
    try {
        aggregateData = await songsClient.artistAggregate(artist)
    } catch (error) {
        console.log(error)
    }
    res.send(compiledFunction(aggregateData))
})

server.listen(4000, () => { console.log('Server listening on port 4000')})