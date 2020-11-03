'use strict';
// Module Dependencies
// -------------------
var express     = require('express');
var bodyParser  = require('body-parser');
var errorhandler = require('errorhandler');
var timeout = require('connect-timeout')
var http        = require('http');
var path        = require('path');
var request     = require('request');
var routes      = require('./routes');
var activity    = require('./routes/activity');

var app = express();

// Configure Express
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json({type: 'application/json'})); 
//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.methodOverride());
//app.use(express.favicon());

app.use(express.static(path.join(__dirname, 'public')));

// Express in Development Mode
if ('development' == app.get('env')) {
  app.use(errorhandler());
}

// HubExchange Routes
app.get('/', routes.index );
app.post('/login', routes.login );
app.post('/logout', routes.logout );

// Custom Hello World Activity Routes
app.post('/journeybuilder/save/', activity.save );
app.post('/journeybuilder/validate/', activity.validate );
//app.post('/journeybuilder/publish/', activity.publish );
app.post('/journeybuilder/publish/', activity.publish,timeout('5s'), bodyParser.json(), haltOnTimedout, function (req, res, next) {
  savePost(req.body, function (err, id) {
    if (err) return next(err)
    if (req.timedout) return
    res.send('saved as id ' + id)
  })
});
function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}

function savePost (post, cb) {
  setTimeout(function () {
    cb(null, ((Math.random() * 40000) >>> 0))
  }, (Math.random() * 7000) >>> 0)
}


app.post('/journeybuilder/execute/', activity.execute );
app.listen(3000)
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
