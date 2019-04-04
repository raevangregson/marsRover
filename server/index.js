const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

//lets you know server is up an running on port 3000
app.listen(3000, () =>
  console.log('Express server is running on localhost:3000')
);