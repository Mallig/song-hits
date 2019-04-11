const db = require('../db')

const all = async (country) => {
    const position = country ? country : 'position'
    const query = `SELECT ${position} AS position, artist, song FROM songs;`
    const { rows } = await db.query(query)
    return { songs: rows }
}

const artistAggregate = async (artist) => {
    const { rows } = await db.query(`SELECT '${artist}' AS artist, CAST(COUNT(song) AS INTEGER) AS "num_songs", SUM(score) AS "total_score" FROM songs WHERE artist LIKE '${artist}';`)
    return { songs: rows }
}

module.exports = {
    all,
    artistAggregate
}