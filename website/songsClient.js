const got = require('got')

const getAllSongs = async (country = '') => {
    try {
        const { body } = await got(`http://localhost:3000/songs?country=${country}`)
        return JSON.parse(body)
    } catch (error) {
        console.log(error)
    }
}

const artistAggregate = async (artist) => {
    artist = encodeURIComponent(artist)
    try {
        const { body } = await got(`http://localhost:3000/songs/artist?name=${artist}`)
        return JSON.parse(body)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllSongs,
    artistAggregate
}