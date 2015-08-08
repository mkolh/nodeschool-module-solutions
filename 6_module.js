// These four things are the contract that your module must follow.

//   * Export a single function that takes exactly the arguments described.
//   * Call the callback exactly once with an error or some data as described.
//   * Don't change anything else, like global variables or stdout.
//   * Handle all the errors that may occur and pass them to the callback.



var filterExtentions = function(directory, exten, callback){
	
	var fs = require('fs');
	var path = require('path');
	
	exten = "." + exten;

	fs.readdir(directory, function(err, data){

		if(err) return callback(err);

		filteredData = data.filter(function(value){
			return path.extname(value) === exten;
		});

		callback(err, filteredData);
		
	});

};

module.exports = filterExtentions;