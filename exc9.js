'use strict';

var http = require('http');

var urls = process.argv.slice(2);

var results = []
var count = 0

function main(urls) {
    for (let i=0; i < urls.length; i++) {
        httpGet(i);
    }
}

function printResults() {
    for (let i=0; i < results.length; i++) {
        console.log(results[i])
    }
}

function httpGet(index) {
    http.get(urls[index], function(response) {
        var data = '';
        response.setEncoding('utf8').on("data", function(chunk) {
            data += chunk.toString();
        });
        response.on("end", function() {
            results[index] = data
            count++

            if (count === urls.length) {
                printResults()
            }
        });
    });
}

main(urls)
