const http = require('http')
const assert = require('assert')

const songResponse = require('../data/filterCountryResponse.json')
const app = require('../../app.js')
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
    })

    describe('/songs?country=[country]', function() {
        it('returns top songs of the last decade with requested country chart position', function(done) {
            http.get('http://127.0.0.1:3000/songs?country=de', function(response) {
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