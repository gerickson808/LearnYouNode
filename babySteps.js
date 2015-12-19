sum = 0;
max = process.argv.length;
for (var i = 2; i < max; i++){
	sum += +process.argv[i];
}
console.log(sum);