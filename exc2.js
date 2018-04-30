// console.log(process.argv);

var n = 0;
for (i = 2; i < process.argv.length; i++) {
    n = n + Number(process.argv[i]);
}
console.log(n);
