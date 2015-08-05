//Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.


var fs = require('fs');

var path = process.argv[2];

var text = fs.readFileSync(path).toString();

var answer = text.split("\n");
console.log(answer.length - 1);