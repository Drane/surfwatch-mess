/**
 * Created by jochen on 21/10/15.
 */
/// <reference path='./typings/tsd.d.ts' />
import express = require('express');
import path = require('path');
import http = require('http');
//import R = require('ramda');

import routes = require('./routes/index');

var app = express();

// set the port
app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

/*app.route('/')
    .get(function(req, res) {
        var greet = R.replace('{name}', R.__, 'Hello, {name}!');
        //greet('Alice'); //=> 'Hello, Alice!'
        res.send('Saying hello: ' + greet('Drane'));
    });*/

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});