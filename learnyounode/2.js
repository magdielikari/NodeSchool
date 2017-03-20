var n = process.argv.length;
var a;
for(var i = 0; i < n;i++){
	if(i == 0 || i == 1){
 		i++;
 	}
 	a = a + process.argv[i];
 }
console.log(a);