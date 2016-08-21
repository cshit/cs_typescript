function range(start: number, count:number): number[] {
	return Array.apply(0, Array(count))
		.map(function (element, index) {
			return index + start;
		});
}


function suma_de_n(n: number): number{
	// Partida
	var partida = Date.now();

	// Corre la funcion
	var suma = 0;
	for(var i in range(0, n)){
		suma += i
	}
	
	var fin = Date.now();
	

	return suma
}

console.log(suma_de_n(10));