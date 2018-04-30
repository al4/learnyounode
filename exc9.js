'use strict';

var http = require('http');

var urls = [];

for (var i=0; i < process.argv.length; i++) {
    if (i < 2) {
        continue
    }
    urls.push(process.argv[i];
}


//http.get(url, function(response) {
//    var all_data = '';
//    response.setEncoding('utf8').on("data", function(chunk) {
//        all_data += chunk.toString();
//    });
//    response.on("end", function() {
//        console.log(all_data.length);
//        console.log(all_data);
//    });
//});
