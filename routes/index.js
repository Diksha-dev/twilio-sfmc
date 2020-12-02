'use strict';

// Deps
var activity = require('./activity');

/*
 * GET home page.
 */
exports.index = function(req, res){
    if( !req.session.token ) {
        res.render( 'index', {
            title: 'Unauthenticated',
            errorMessage: 'This app may only be loaded via Salesforce Marketing Cloud',
        });
    } else {
        res.render( 'index', {
            title: 'Journey Builder Activity',
            results: activity.logExecuteData,
        });
    }
};

exports.login = function( req, res ) {
    console.log( 'req.body: ', req.body ); 
    res.redirect( '/' );
};

exports.logout = function( req, res ) {
    req.session.token = '';
};
exports.messageresponse=function(req,res)
{
    console.log(req);
    console.log("messageresponseres"+res);
    console.log("body"+res.body);
var url = require('url');
var address =  req.url;
var q = url.parse(address, true);
 
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/index.php'
console.log(q.search); //returns '?type=page&action=update&id=5221'
 
var qdata = q.query; // returns an object: { type: page, action: 'update',id='5221' }
 //returns 'page'
var Body = qdata.Body; //returns 'update'
var Tonumber = qdata.To; //returns '5221
  var SmsMessageSid=qdata.SmsMessageSid;
    var ToCountry=qdata.ToCountry;
    var SmsSid=qdata.SmsSid;
    
    
  //  var To = Tonumber.replace('+', '');
    
    
  
  //insert into data extension
    
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
   
    //insert data extension
   request.post({
  headers: {'content-type' : 'application/json','Authorization': 'Bearer ' + access_token},
  url:     'https://mc6vgk-sxj9p08pqwxqz9hw9-4my.rest.marketingcloudapis.com/data/v1/async/dataextensions/key:177E4257-1831-47D9-900B-506123389886/rows',
  body:    {
   "items":
[
    {
       
        
  'ToCountry' :	ToCountry,
        'SmsMessageSid':SmsMessageSid,
'SmsSid':SmsSid,

'Body':Body,
        'To':Tonumber

        
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
    
    //insserted into data extension
    
};

