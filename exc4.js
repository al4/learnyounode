var fs = require('fs');

var file = process.argv[2];

function callback(err, data) {
    if (err) {
        return console.log(err)
    }

    var lines = data.toString().split('\n');
    console.log(lines.length - 1);
}

if (!file) {
    console.log("file is required")
    process.exit(1);
}

data = fs.readFile(file, callback);
