const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/newPosition', (req, res) => {
    let body = "";
    let rocks = req.query['rocks']
    let moves = req.query['moves']
    let rover = req.query['rover']
    //DO MATH -> Send new position to frontend
    /*psuedo code
    loop through moves  

    create right, left, forward backward functions that are only ran if the move is sent

    create a function that checks if a position runs into a rock and send back error to front-end

    RIGHT
    IF(move = Right && rover == 6,12,18,24,30,36)
    then SUBTRACT 5 from rover position
    check of rock is at the new position
    ELSE
    ADD ONE
    check if rock is at the new position

    LEFT
    if(move = LEFT && rover == 1,7,13,19,25,31)
    then ADD 5 to rover position
    check of rock is at the new position
    ELSE
    SUBTRACT 1
    check if rock is at the new position

    FORWARD
    if(move = FORWARD && rover == 1,2,3,4,5,6)
    then ADD 30 to rover position
    check of rock is at the new position
    ELSE
    SUBTRACT 6
    check if rock is at the new position

    BACKWARD
    IF(move = BACKWARD && rover == 31,32,33,34,35,36)
    then SUBTRACT 30 from rover position
    check of rock is at the new position
    ELSE
    ADD 6
    check if rock is at the new position

    */
    res.send(newPosition)
  });

//lets you know server is up an running on port 3000
app.listen(3000, () =>
  console.log('Express server is running on localhost:3000')
);