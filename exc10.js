'use strict;'
var net = require('net')
var strftime = require('strftime')

main(process.argv.slice(2))

function main(argv) {
    var port = argv[0]
    var server = net.createServer(function(socket) {
        socket.write(strftime('%Y-%m-%d %H:%M' + '\n'))
        socket.end()
    })
    server.listen(port)
}

