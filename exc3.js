var fs = require('fs');

var file = process.argv[2];

data = fs.readFileSync(file);
var str = data.toString();

var arr = str.split('\n');

console.log(arr.length - 1);
