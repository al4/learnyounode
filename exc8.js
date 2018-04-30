'use strict';

var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
    var all_data = '';
    response.setEncoding('utf8').on("data", function(chunk) {
        all_data += chunk.toString();
    });
    response.on("end", function() {
        console.log(all_data.length);
        console.log(all_data);
    });
});
