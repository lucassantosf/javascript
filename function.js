function somar(x1, x2, operator){
	return eval(`${x1} ${operator} ${x2}`);
}
let resultado = somar(1,3,"+");
console.log(resultado);