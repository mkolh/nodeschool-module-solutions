// Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.

//Use a module

var filterExtensions = require('./filterExtensions');

// You now have the module.exports object in your module assigned to the filterExtensions variable. Since you are exporting a single function, mymodule is a function you can call!

var args = process.argv[2];
var extens = process.argv[3];

filterExtensions(args, extens, logMatches);

function logMatches(err, data){

	for(i = 0; i <= data.length - 1; i++){

			console.log(data[i]);
	
	}
}