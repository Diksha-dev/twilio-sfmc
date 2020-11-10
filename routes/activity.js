'use strict';
var util = require('util');

// Deps
const Path = require('path');
const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));
//const https = require('https');
var http = require('https');
var express     = require('express');
var bodyParser  = require('body-parser');
var errorhandler = require('errorhandler');
//var timeout = require('connect-timeout');
var http        = require('http');

var request     = require('request');



//app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.methodOverride());
//app.use(express.favicon());



exports.logExecuteData = [];

function logData(req) {
    exports.logExecuteData.push({
        body: req.body,
        headers: req.headers,
        trailers: req.trailers,
        method: req.method,
        url: req.url,
        params: req.params,
        query: req.query,
        route: req.route,
        cookies: req.cookies,
        ip: req.ip,
        path: req.path, 
        host: req.host,
        fresh: req.fresh,
        stale: req.stale,
        protocol: req.protocol,
        secure: req.secure,
        originalUrl: req.originalUrl
    });
    console.log("body: " + util.inspect(req.body));
    console.log("headers: " + req.headers);
    console.log("trailers: " + req.trailers);
    console.log("method: " + req.method);
    console.log("url: " + req.url);
    console.log("params: " + util.inspect(req.params));
    console.log("query: " + util.inspect(req.query));
    console.log("route: " + req.route);
    console.log("cookies: " + req.cookies);
    console.log("ip: " + req.ip);
    console.log("path: " + req.path);
    console.log("host: " + req.host);
    console.log("fresh: " + req.fresh);
    console.log("stale: " + req.stale);
    console.log("protocol: " + req.protocol);
    console.log("secure: " + req.secure);
    console.log("originalUrl: " + req.originalUrl);
}

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function (req, res) {

    console.log("5 -- For Edit");	
    console.log("4");	
    console.log("3");	
    console.log("2");	
    console.log("1");	
    //console.log("Edited: "+req.body.inArguments[0]);    
    
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Edit');
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function (req, res) {
    
    console.log("5 -- For Save");	
    console.log("4");	
    console.log("3");	
    console.log("2");	
    console.log("1");	
    //console.log("Saved: "+req.body.inArguments[0]);
    
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    logData(req);
    res.send(200, 'Save');
};

/*
 * POST Handler for /execute/ route of Activity.
 */
exports.execute = function (req, res) {

    console.log("5 -- For Execute");	
    console.log("4");	
    console.log("3");	
    console.log("2");	
    console.log("1");	
    console.log("Executed: "+req.body.inArguments[0]);
    
    var requestBody = req.body.inArguments[0];

    const accountSid = requestBody.accountSid;
    const authToken = requestBody.authToken;
    const to = requestBody.to;
   // const from = requestBody.messagingService;
    const body = requestBody.body;;

    const client = require('twilio')(accountSid, authToken); 
     
   var conf= client.messages 
          .create({ 
             body: body,
             from: "+12059533166",
        statusCallback:"https://enxxswdifleyaug.m.pipedream.net/messagestatus",
             to: to
           },
                  function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
        console.log(responseData);
        console.log(responseData.sid); 
        console.log(responseData.SmsStatus);
         console.log(responseData.MessageStatus); 
         console.log(responseData.MessageSid); 
        console.log(responseData.ApiVersion);
        
       var accountSid = responseData.accountSid;
        var apiVersion = responseData.apiVersion;
        var body = responseData.body;
        var dateCreated = responseData.dateCreated;
        var dateUpdated = responseData.dateUpdated;
        var dateSent = responseData.dateSent;
        var direction = responseData.direction;
        var errorCode = responseData.errorCode;
        var from = responseData.from;
          var numMedia = responseData.numMedia;
          var numSegments = responseData.numSegments;
          var price = responseData.price;
          var priceUnit = responseData.priceUnit;
          var sid = responseData.sid;  
        var status = responseData.status;
        var to = responseData.to;
        
        
     
        

        //start
      
const https = require('https');
 
    console.log("near");
    // A chunk of data has been recieved.
 var request = require('request');
request.post({
  headers: {'content-type' : 'application/json'},
  url:     'https://mc6vgk-sxj9p08pqwxqz9hw9-4my.auth.marketingcloudapis.com/v2/token',
  body:    {
 'client_id': 'st2hh4evaktntnx6lwcuxuyk', //pass Client ID
        'client_secret': '32W5MJL1qquzBUjyeMe375Y=', //pass Client Secret
        'grant_type': 'client_credentials',
           'account_id':'514003870'
},
     json: true
}, function(error, response, body){
  console.log("Access"+body.access_token);
     console.log("response"+response);
     console.log("error"+error);
    var access_token= body.access_token;
    console.log("in"+access_token);
    console.log("Sid"+sid);
    //insert data extension
   request.post({
  headers: {'content-type' : 'application/json','Authorization': 'Bearer ' + access_token},
  url:     'https://mc6vgk-sxj9p08pqwxqz9hw9-4my.rest.marketingcloudapis.com/data/v1/async/dataextensions/key:B1F19A19-08ED-4299-B49B-9C3095F3D310/rows',
  body:    {
   "items":
[
{
                'accountSid' :'accountSid',
         'apiVersion':'apiVersion',
        'body' :'body',
         'dateCreated':'dateCreated',
         'dateUpdated': 'dateUpdated',
         'dateSent':'dateSent',
         'direction':'direction',
        'errorCode':'errorCode',
    'from':'from',
    'numMedia':'numMedia',
    'numSegments':'numSegments',
    'price':'price',
    'priceUnit':'priceUnit',
    'sid':'sid',
    'status':'status',
    'to':'to',
    'sids':'sid'
}
]
},
     json: true
}, function(error, response, body){
  console.log("body"+body);
     console.log("response"+response);
     console.log("error"+error);
       console.log("requestId"+body.requestId);
       console.log("resultMessages"+body.resultMessages);
       
});
    
     //complete data extension
});
  //  console.log("out"+access_token);    
 //insert data extension
       
console.log("pass");


//finl

    }
});
          



    // FOR TESTING
    logData(req);
    res.send(200, 'Publish');

    // Used to decode JWT
    // JWT(req.body, process.env.jwtSecret, (err, decoded) => {

    //     // verification error -> unauthorized request
    //     if (err) {
    //         console.error(err);
    //         return res.status(401).end();
    //     }

    //     if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
            
    //         // decoded in arguments
    //         var decodedArgs = decoded.inArguments[0];
            
    //         logData(req);
    //         res.send(200, 'Execute');
    //     } else {
    //         console.error('inArguments invalid.');
    //         return res.status(400).end();
    //     }
    // });
};


/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function (req, res) {

    console.log("5 -- For Publish");	
    console.log("4");	
    console.log("3");	
    console.log("2");	
    console.log("1");	
    //console.log("Published: "+req.body.inArguments[0]);        
    
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
  logData(req);
    res.send(200, 'Publish');
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function (req, res) {

    console.log("5 -- For Validate");	
    console.log("4");	
    console.log("3");	
    console.log("2");	
    console.log("1");	
    //console.log("Validated: "+req.body.inArguments[0]);       
    
    // Data from the req and put it in an array accessible to the main app.
    //console.log( req.body );
    logData(req);
    res.send(200, 'Validate');
};
exports.messagestatus = function(req,res)
{
   // var messageSid = req.body.MessageSid;
 // var messageStatus = req.body.MessageStatus;
 console.log("5 -- For Message Status");	
    console.log("4");	
    console.log("3");	
    console.log("2");	
    console.log("1");
     console.log("5 -- For Message Status");	
    console.log("4");	
    console.log("3");	
    console.log("2");	
    console.log("1");	
 //console.log(`SID: ${messageSid}, Status: ${messageStatus}`);
 logData(req);
  res.send(200,'messagestatus');
};

