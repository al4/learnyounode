'use strict';

var dir = process.argv[2];
var ext = process.argv[3];
var lsfilter = require('./lsfilter');

function callback(err, arr) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    for (var i=0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

lsfilter(dir, ext, callback);

