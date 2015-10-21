/**
 * Created by jochen on 21/10/15.
 */
/// <reference path='./typings/tsd.d.ts' />
var express = require('express');
var http = require('http');
var R = require('ramda');
var app = express();
app.set('port', process.env.PORT || 3000);
app.route('/')
    .get(function (req, res) {
    var greet = R.replace('{name}', R.__, 'Hello, {name}!');
    //greet('Alice'); //=> 'Hello, Alice!'
    res.send('Saying hello: ' + greet('Jochen'));
});
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
