//Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.


var fs = require('fs');

//first two values in this array are "node" and this file's url
var path = process.argv[2];


//readfile aruments are filename, object (encoding + flag), callback (err, data) 
var text;
fs.readFile(path, function(err, data){
	if (err) throw err;

	//data comes out in buffer form since no encoding was specified.
	text = data.toString().split('\n');

	//need to run the console.log in the function BECAUSE IT'S ASYNCHRONOUS!!!!
	console.log(text.length - 1);
});

