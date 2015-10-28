/**
 * Created by jochen on 28/10/15.
 */
/// <reference path='../typings/tsd.d.ts' />
var express = require('express');
var R = require('ramda');
var router = express.Router();
var greet = R.replace('{name}', R.__, 'Hello, {name}!');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express', greet: greet('Drane') });
});
module.exports = router;
