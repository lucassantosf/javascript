class celular{

	constructor(){
		this.cor = "prata";
	}

	ligar(){
		return("Uma ligacao");
	}

}

let objeto = new celular();
console.log(objeto.ligar());