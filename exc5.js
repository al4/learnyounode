'use strict;'
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

function callback(err, list) {
    if (err) {
        return console.log(err);
    }

    l = list.filter(extMatch);
    for (i=0; i < l.length; i++) {
        console.log(l[i]);
    }

}

function extMatch(item) {
    return path.extname(item) == '.' + ext;
};

fs.readdir(dir, callback);

