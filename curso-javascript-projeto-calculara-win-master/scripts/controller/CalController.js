class CalcController{

	//Método Construtor
	constructor(){
		// quando declarado com this. em qualquer lugar da classe esta váriavel poderá ser utilizada
		// Por Convensão atributos com _ são private				
		this._locale = 'pt-BR'; // Variável para definir o idioma nas funções de tempo e hora
		this._displayCalcEl = document.querySelector("#display"); // Variáveis selecionam os elementos do body pelo seu ID
		this._dateEl = document.querySelector("#data");
		this._timeEl = document.querySelector("#hora");		
		this._currentDate;
		this.initialize();
		this.initButtonsEvents();
	}
	//Tudo que irá acontecer quando iniciar o objeto
	initialize(){		
		
		this.setDisplayDateTime();//Define no HTML a data e hora atual

		//Função executada em intervalo de tempo, neste caso executa uma arrow function em 1000 milisegundos
		setInterval(()=>{
			this.setDisplayDateTime();
		},1000);	
		
		/*setTimeout(()=>{ //Esta função aguarda um determinado período para executar
			clearInterval(interval);
		},10000);*/

	}
	//Eventos dos botões
	initButtonsEvents(){
		let buttons = document.querySelectorAll("#calculadora > div, #buttons button"); //Seleciona todos os elementos pelo ID e o tipo do elemento
		
		buttons.forEach((btn,index)=>{
			btn.addEventListener('click',e=>{//Apartir do evento do click, precisa-se da classe do elemento clicado
				console.log(btn.className.replace("btn btn-number col-sm  btn-","")); 
			});
		});

		
	}

	// Encapsulamentos ----- Getters e Setter -----------------------------------------------------------------------------------------------------------------------------------------------
	// Get's	
	get displayCalc(){
		//pega o valor que esta no html
		return this._displayCalcEl.innerHTML;
	}
	get currentDate(){
		return new Date();
	}
	get displayTime(){//relacionado à hora
		return this._timeEl.innerHTML;
	}
	get displayDate(){//relacionado à data
		return this._dateEl.innerHTML;
	}

	// Set's
	set displayCalc(valor){
		//altera o valor no HTML
		this._displayCalcEl.innerHTML = valor;
	}
	set currentDate(valor){
		this._currentDate = valor;
	}
	set displayTime(valor){//relacionado à hora
		this._timeEl.innerHTML = valor;
	}
	set displayDate(valor){//relacionado à data
		this._dateEl.innerHTML = valor;
	}
	setDisplayDateTime(){ //Este método exibe a data e hora atual nos elementos HTML
		this.displayDate = this.currentDate.toLocaleDateString(this._locale,{day:"2-digit",month:"short",year:"numeric"});//seta o display de Data com o valor da Data Atual recebido objeto do método currentDate
		this.displayTime = this.currentDate.toLocaleTimeString(this._locale);//seta o display de Tempo com o valor do Tempo Atual recebido objeto do método currentDate
	}

	// Fim Encapsulamento ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
}