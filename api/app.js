const express = require('express');
const mountRoutes = require('./routes')

const app = express();
mountRoutes(app)

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});