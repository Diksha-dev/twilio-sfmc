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
    console.log(req.body);
 //console.log(`SID: ${messageSid}, Status: ${messageStatus}`);
 logData(req);
  res.send(200,'messagestatus');
};
