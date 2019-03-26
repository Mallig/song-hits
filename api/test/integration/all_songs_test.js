var assert = require('assert')
// var app = require('../../app.js')
// var songResponse = require('../data/dummyResponse.json')

xdescribe('/songs', function() {
    it('returns top 200 songs of the last decade', function() {
        assert.equal(app.get('/songs'), songResponse)
    })
})