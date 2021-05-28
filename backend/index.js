const express = require("express");
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors')
const routes = require("./routes.js");
const PORT =  3000;


app.use(cors())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hello World')
  })

  //Routes
app.use(routes);

app.listen(PORT, err => {
  if (err) console.log(`Error: ${err}`);

  console.log(`Server running on port: ${PORT}`);
});
