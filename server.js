const routes = require('./backend');
const express = require('express');
const sequelize = require('./backend/sqldb/connection');
const path = require('path');
const app = express();
//set up port for when it is in prod
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
// //express configs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);


//change force to true to reset db on startup
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
console.log("started");