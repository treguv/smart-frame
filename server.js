const routes = require('./backend')
const express = require('express')
const sequelize = require('./backend/sqldb/connection')
const app = express()
 

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.use(routes);
app.listen(3000);
console.log("started");