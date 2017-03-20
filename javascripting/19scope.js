var a = 1, b = 2, c = 3;
(function firstFunction(a){
	var b = 5, c = 6;

	(function secondFunction(a,c){
		var b = 8;
		console.log("a: " + a + ", b: " + b + ", c: " +  c );

		(function thirdFunction(){
			var a = 7, c = 9;

			(function fourthFunction(){
				var a = 1, c = 8;

			})();
		})();
	})(a,c);
})(a);