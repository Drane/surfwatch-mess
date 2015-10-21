var fs = require('fs'),
    Rx = require('rx');

var connectionProperties = {
    host: 'ftp.odnature.be'
};

var Client = require('ftp');
var c = new Client();



c.connect(connectionProperties);




// Wrap fs.exists
//var readdir = Rx.Observable.fromNodeCallback(fs.readdir);

// Check if file.txt exists
//var source = readdir('data/');

//var subscription = source.subscribe(
var subscription = Rx.Observable.fromNodeCallback(fs.readdir)('data/').subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

// => Next: true
// => Completed