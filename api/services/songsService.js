const all = async (db, country = null) => {
    const position = country ? country : 'position'
    const query = `SELECT ${position} AS position, artist, song FROM songs;`
    const { rows } = await db.query(query)
    return rows
}

const artistAggregate = async (db, artist) => {
    // TODO: aliases don't need to be the name of the colmuns as they will appear on the front end
    const { rows } = await db.query(`SELECT '${artist}' AS artist, CAST(COUNT(song) AS INTEGER) AS "number of songs", SUM(score) AS "total score" FROM songs WHERE artist LIKE '${artist}';`)
    return rows[0]
}

module.exports = {
    all,
    artistAggregate
}