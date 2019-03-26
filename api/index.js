var express = require('express');
var app = express();
const db = require('./db')

app.get('/', (req, res, next) => {
    db.query('SELECT NOW();',null, (err, resDB) => {
        if (err) {
            return next(err)
        }
        res.send(resDB.rows[0])
      })
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});