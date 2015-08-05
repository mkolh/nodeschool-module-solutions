
//return the result of numbers, passed through the command line


var num = 0;

//push the command line arguments to num array
//remember that first two entries are alwasy "node" and the path of the file

for(i = 2; i <= process.argv.length - 1; i++){
	num += Number(process.argv[i]);
};

console.log(num);