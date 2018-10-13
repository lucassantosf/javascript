let carros = ["palio 98", "toro", "uno", 12, true, new Date()]; // array em JavaScript aceita qualquer tipo de dados

console.log(carros.length);
console.log(carros[0]);

carros.forEach(function(value, index){
	console.log(index, value);
});