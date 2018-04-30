'use strict';

var fs = require('fs');
var path = require('path');

function extMatch(item) {
    return path.extname(item) == '.' + this;
}

function lsfilter(dir, ext, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) {
            return callback(err)
        }
        callback(null, files.filter(extMatch, ext));
    });
}

module.exports = function(dirname, extension, callback) {
    lsfilter(dirname, extension, function(err, data){
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
};
