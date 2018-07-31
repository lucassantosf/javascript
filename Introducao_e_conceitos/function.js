
/*function somar(x1, x2, operator){
	return eval(`${x1} ${operator} ${x2}`);
}*/ 

//abaixo um exemplo de ArrowFunction

calc = (x1, x2, operator)=>{
	return eval(`${x1} ${operator} ${x2}`);
}
let resultado = calc(1,3,"+");
console.log(resultado);