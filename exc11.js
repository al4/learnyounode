'use strict';

var http = require('http')
var fs = require('fs')

main(process.argv.slice(2))

function main(argv) {
    var port = argv[0]
    var filepath = argv[1]


    var server = http.createServer(function(request, response) {
        var file = fs.createReadStream(filepath)
        file.pipe(response)
    })

    server.listen(port)
}

