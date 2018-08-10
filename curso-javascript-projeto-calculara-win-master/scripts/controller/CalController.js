class CalcController{

	//Método Construtor
	constructor(){
		// quando declarado com this. em qualquer lugar da classe esta váriavel poderá ser utilizada
		// Por Convensão atributos com _ são private		
		this._displayCalc = "0";
		this._currentDate;
		this.initialize();

	}
	//Tudo que irá acontecer quando iniciar o objeto
	initialize(){
		
		// Variáveis selecionam os elementos do body pelo seu ID
		let displayCalcEl = document.querySelector("#display");
		let dateEl = document.querySelector("#data");
		let timeEl = document.querySelector("#hora");

		displayCalcEl.innerHTML = "435" ;//Com o elemento selecionado, .innerHTML converte um valor dentro do body em HTML
		dateEl.innerHTML = "435" ;
		timeEl.innerHTML = "435" ;	

	}

	// Encapsulamentos ----- Getters e Setter -----------------------------------------------------------------------------------------------------------------------------------------------
	// Get's	
	get displayCalc(){
		return this._displayCalc;
	}
	get dataAtual(){
		return this._currentDate;
	}

	// Set's
	set displayCalc(valor){
		this._displayCalc = valor;
	}
	set dataAtual(valor){
		this._currentDate = valor;
	}

	// Fim Encapsulamento ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
}