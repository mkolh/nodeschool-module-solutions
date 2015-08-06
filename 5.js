//Create a program that prints a list of files in a given directory, filtered by the extension of the files.
//You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.


var fs = require('fs');
var path = require('path');

//first two values in this array are "node" and this file's url
var arg = process.argv[2];

//extension is the next argument
var exten = "." + process.argv[3];

fs.readdir(arg, function(err, files){

	if(err) throw err;

	for(i = 0; i <= files.length - 1; i++){
		if(path.extname(files[i]) === exten){
			console.log(files[i]);
		} 
	}

});