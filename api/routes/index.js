const db = require('../db')

app.get('/', (req, res, next) => {
    db.query('SELECT NOW();', (err, res) => {
        if (err) {
            return next(err)
        }
        res.send(res.rows[0])
    })
})