const routes = require('./backend')
const express = require('express')
const app = express()
 

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.use(routes);
app.listen(3000);
console.log("started");