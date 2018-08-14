class CalcController{

	//Método Construtor
	constructor(){
		// quando declarado com this. em qualquer lugar da classe esta váriavel poderá ser utilizada
		// Por Convensão atributos com _ são private				
		this._operation = [];//Variável com idéia para guardar a última operação
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
			this.addEventListenerAll(btn,"click drag", e => { //Apartir do evento do click, precisa-se da classe do elemento clicado
				try{
					let textBtn = btn.className.replace("btn btn-number col-sm btn-","");
					//Esta condição irá verificar se o botão clicado é um número, caso a classe retornada no replace for diferente para o que é esperado para número, foi clicado sobre alguma operação
					if(textBtn.length > 2){
						let textBtn2 =  btn.className.replace("btn btn-others col-sm btn-","");
						console.log(textBtn2);
						this.execBtn(textBtn2.toString());
					}else{
						console.log(textBtn);
						this.execBtn(textBtn);
					}
				}catch(err){
					console.log(err);
				}

			});
			this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{
				btn.style.cursor = "pointer";
			});
		});		
	}

	//Este método serve para adicionar mais de um evento à um determinado elemento com o método nativo split. O split recebe um texto separador, o espaço, e assim para cada espaço será adicionado em um vetor. O forEach irá rodar baseado no tamanho do vetor, e para cada repetição, irá um eventlistener 
	
	addEventListenerAll(element, events, fn){
		events.split(' ').forEach(event => {
			element.addEventListener(event, fn, false);
		});
	}

	//Este método recebe o valor do botão para identificar sua ação através do Switch
	execBtn(value){
		switch(value){
			case 'c':
				this.clearAll();
				break;
			case 'ce':
				this.clearEntry();
				break;
			case 'adicao':
				this.addOperation("+");
				break;
			case 'subtracao':
				this.addOperation('-');
				break;
			case 'multiplicacao':
				this.addOperation('*');
				break;
			case 'divisao':
				this.addOperation('/');
				break;
			case 'porcento':
				this.addOperation('%');
				break;
			case 'virgula':
				this.addOperation(',');
				break;
			case 'raiz':
			
				break;
			case 'expo':
			
				break;
			case 'denominador':
			
				break;
			case 'traco':
			
				break;
			case 'maismenos':
			
				break;
			case 'igual':
			
				break;
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				this.addOperation(parseInt(value));
			 	break;
			default:
				this.setError();
				break;
		}
	}

	//Este método é responsável pelo Botão C - Limpa Tudo
	clearAll(){
		this._operation = [];
	}

	//Este método é responsável pelo Botão CE - Clear Entry, limpar a última entrada
	clearEntry(){
		this._operation.pop(); //Método Pop retira o último item do vetor
	}

	//Este método serve para exibir mensagem de erro
	setError(){
		this.displayCalc = "Error";
	}

	//Este método adiciona operações para o vetor de cálculos
	addOperation(value){
		
		//Verificação para definir se o valor passado é um Número ou uma String com o método isNaN
		if(isNaN(this.getLastOperation())){			
			//String
			if(this.isOperator(value)){
				//Trocar o operador
				this.setLastOperation(value);
			}else if(isNaN(value)){
				//Outro				
				console.log(value);
			}else{
				//Esta condição é somente para a primeira inserção de dados no vetor para não retornar undefined 
				this.pushOperation(value); //Método Push adiciona um item ao vetor
			
			}
		}else{			
			//Number
			if(this.isOperator(value)){				
				this.pushOperation(value);
			}else{
				let newValue = this.getLastOperation().toString() + value.toString();
				// Sendo um número o valor do botão clicado, a idéia é concatenar a última posição ao valor atual. Ambas as variaveis são manipulador em texto com o toString(). 
				this.setLastOperation(parseInt(newValue)); //Método Push adiciona um item ao vetor
				//atualizar display
				this.setLastNumberToDisplay();
			}			
		}
		
	}

	//Este método recupera o último valor do array Operation
	getLastOperation(){
		return this._operation[this._operation.length-1];
	}

	//Este método verifica se o valor passado é um operador
	isOperator(value){
		return(['+','-','*','%','/'].indexOf(value) > -1);
	}

	//Este método serve para trocar a variável concatenada entre os números convertidos em texto, à última posição do array Operation
	setLastOperation(value){
		this._operation[this._operation.length-1] = value;
	}
	//Este método apenas é responsável por receber um valor e fazer um push no vetor de operações
	pushOperation(value){
		this._operation.push(value);

		if(this._operation.length > 3){			
			this.calc();			
		}
	}

	//Este método com o Eval irá juntar as tres posições do vetor em uma unica expressão para auxiliar num futuro calculo
	calc(){
		let last = this._operation.pop();
		let result = eval(this._operation.join(""));
		this._operation = [result, last];
	}

	//Este método coloca no display o último número no display
	setLastNumberToDisplay(){

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