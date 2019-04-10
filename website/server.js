const express = require('express')
const got = require('got')
const pug = require('pug')

const server = express();
const compiledFunction = pug.compileFile('template.pug')

const getAllSongs = async () => {
    try {
        const { body } = await got('http://localhost:3000/songs')
        return JSON.parse(body)
    } catch (error) {
        console.log(error)
    }
}

const artistAggregate = async (artist) => {
    console.log('running artist aggregate function')
    artist = encodeURIComponent(artist)
    try {
        const { body } = await got(`http://localhost:3000/songs/artist?name=${artist}`)
        return JSON.parse(body)
    } catch (error) {
        console.log(error)
    }
}

server.set('view engine', 'pug')

server.get('/', async (req, res) => {
    try {
        allSongs = await getAllSongs()
    } catch (error) {
        console.log(error)
    }
    res.send(compiledFunction(allSongs))
})

server.get('/artist', async (req, res) => {
    const artist = req.query.artist
    console.log(artist)
    try {
        aggregateData = await artistAggregate(artist)
    } catch (error) {
        console.log(error)
    }
    res.send(compiledFunction(aggregateData))
})

server.listen(4000, () => { console.log('Server listening on port 4000')})