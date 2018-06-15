const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(8000);

const bodyParser = require('body-parser');
app.use(bodyParser.json());



// mongoose connection
console.log('hitting mongoose.js')
require('./mongoose.js');

// routing
console.log('routing time');
// angular
app.use(express.static( __dirname + '/helloAngular/dist/helloAngular' ));
// api
app.use('/tasks', require('./routes.js'));