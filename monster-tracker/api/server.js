var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  Task = require('./models/monsterModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/monsters'); 

// easy body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// define the routes
var routes = require('./routes/monsterRoutes'); //importing route
routes(app); //register the route

// 404 errors
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// go
app.listen(port);
console.log('RESTful API server started on: ' + port);