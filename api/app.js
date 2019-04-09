dotenv = require('dotenv')

if (process.env.NODE_ENV === 'test') {
  dotenv.config({path: './test/.env.test'})
} else {
  dotenv.config()
}

const express = require('express')
const mountRoutes = require('./routes')

const app = express()
mountRoutes(app)

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => { console.log('App listening on port 3000!') })
}

module.exports = app