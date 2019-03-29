var http = require('http')
var assert = require('assert')

var songResponse = require('../data/allSongsResponse.json')
var app = require('../../app.js')
const db = require ('../../db')
var server

describe('App', function() {
    before(async function() {
        try {
            await db.query('COPY songs FROM \'/Users/malachygilchrist/Documents/Coding/tech_tests/song-hits-challenge/api/test/data/songs.csv\' WITH (FORMAT csv, HEADER true, NULL "-", FORCE_NULL(us, uk, de, fr, au, ca));')
        } catch (err) {
            console.log(err)
        }
        server = app.listen(3000, () => { console.log('Running Test Server') })
    })

    after(async function() {
        await db.query('TRUNCATE TABLE songs;')
        server.close(() => { console.log('Server Closing') })
        // TODO test seems to hang for a bit afterwards, are there any unresolved promises
        // being left behind that could casue this, or does it just take a while for the server to close
    })

    describe('/songs', function() {
        it('returns top songs of the last decade', function(done) {
            http.get('http://127.0.0.1:3000/songs', function(response) {
                assert.equal(response.statusCode, 200)

                var body = ''
                response.on('data', function(d) {
                    body += d
                })

                response.on('end', function() {
                    assert.equal(body, JSON.stringify(songResponse))
                })

                done()
            })
        })
    })
})