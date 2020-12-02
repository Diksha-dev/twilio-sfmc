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
var address = 'path';
var q = url.parse(address, true);
 
console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/index.php'
console.log(q.search); //returns '?type=page&action=update&id=5221'
 
var qdata = q.query; // returns an object: { type: page, action: 'update',id='5221' }
 //returns 'page'
console.log(qdata.Body); //returns 'update'
console.log(qdata.To); //returns '5221
    console.log(req.url);
    console.log(req.Url);
    console.log(res.url);
    console.log(res.Url);
    
};

