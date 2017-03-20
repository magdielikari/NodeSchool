var pets = ['cat', 'dog', 'rat'];
var a = "[ ";
for(var i = 0; i < 3; i++){
	pets[i] = pets[i] + "s";
	if(i == 2){
		a = a + "'" + pets[i] + "' ]";
	}else{	
		a = a + "'" + pets[i] + "', ";
	}
}
console.log(a);