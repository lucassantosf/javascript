let celular = function(){
	
	this.cor = "prata";
	this.ligar = function(){
		return "Ligacao";
	}
	
}

let objeto = new celular();
console.log(objeto.cor);
console.log(objeto.ligar());