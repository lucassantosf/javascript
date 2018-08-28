class UserController{

	//Método Construtor da classe User - recebe o id do formulário como argumento, e da tabela para inserir novo usuário quando criado
	constructor(formId, tableId){

		this.formEl = document.getElementById(formId);
		this.tableEl = document.getElementById(tableId);
		this.onSubmit();
	}

	//Este método é responsável apenas por enviar o formulário
	onSubmit(){

		//Escuta do evento submit ao formEl
		this.formEl.addEventListener("submit", event =>{ //ArrowFunction - sem uso de escopo, não é necessário declarar esta função com function
	
			event.preventDefault();//Este método nativo do JS para a execução do método atual

			let btn = this.formEl.querySelector("[type=submit]");//Este querySelector seleciona apenas elementos do tipo submit, ou seja apenas o botão salvar

			btn.disabled = true; 
			
			let values = this.getValues();			

			if(!values) return false; // Caso for retornado false do .getValues dentro da variavel values, ou seja não passou pela validação de cadastro do formulário, retornamos falso neste mesmo método para não ler o arquivo da foto

			this.getPhoto().then( // Then utilizado junto com a Promise
				(content)=>{
					//Função de quando der sucesso
					values.photo = content;
					
					this.addLine(values);//Adicionar os dados do usuário em uma nova 'linha' da tabela

					this.formEl.reset();//Limpar o formulário

					btn.disabled = false;			
				}, 
				(e)=>{
					//Função de quando der erro
					console.error(e);
				});						
		});

	}

	//Este método apenas recupera a foto selecionada pelo usuário, e a converte para um arquivo em base64 quando for exibir na tela
	getPhoto(){
		
		//Promise possui métodos para tratar quando há algum problema ao ler arquivo
		return new Promise((resolve, reject)=>{
			let fileReader = new FileReader();//Método nativo da API Web para arquivos
		
			//Este spread é necessário apenas para filtrar se há algum elemento 'photo', se sim retorna-se o valor para a variavel elements	
			let elements = [...this.formEl.elements].filter(item=>{
				if (item.name === 'photo') {
					return item ;
				}
			});

			//Esta variável file recupera exatamente o primeiro indice do file
			let file = elements[0].files[0];

			//Método de callback para quando finalizar a leitura do arquivo
			fileReader.onload = ()=>{			
				resolve(fileReader.result);
			};

			//Este método é o erro do Promise
			fileReader.onerror = ()=>{
				reject(e);
			}

			//Recupera o caminho do file, lendo o arquivo, se não houver o file, manda direto para o resolve, não tornando obrigatório selecionar algum arquivo
			if(file) {
				fileReader.readAsDataURL(file);	
			}else{
				resolve('dist/img/boxed-bg.jpg');
			}

		});
		
	}


	//Este método recupera os valores do formulário de cadastro para usuários
	getValues(){

		// let - variável que trabalha apenas no escopo onde é declarado, ou seja nesta abaixo existe apenas no getValues
		let user = {};
		let isValid = true;


		//Este trecho do código faz um forEach baseado em cada elemento do formulário, assim recupera o valor de cada e atribui a variavel user
		// ... -> uso de Spread, necessário este operador devido ao forEach trabalhar apenas com array, logo o spread converte em array todos os elementos do form 
		[...this.formEl.elements].forEach(function(field, index){

			//Este trecho de código valida se há name, email ou password comparando com o fiel.name atual através do indexOf - pois se houver valor negativo no indexOf não há este valor comparado
			//O field precisa ter valor, pois se for vazio e atender `a outra condição significa que o campo não foi validado e é adicionado a classe de erro na tela, e finaliza as demais regras do método 

			if(['name','email','password'].indexOf(field.name) > -1 && !field.value){

				field.parentElement.classList.add('has-error');
				isValid = false; //Não executa mais a função
			
			}
	
			if(field.name == "gender" && field.checked){
				user[field.name] = field.value;
			}else if(field.name == "admin"){//Esta área verifica se esta marcado como admin no cadastro
				user[field.name] = field.checked;
			}
			else{
				user[field.name] = field.value;
			}

		});

		//Se a variavel possuir valor falso, todo a execução do método é retorna em falsa pois não retorna-se o User
		if(!isValid){ 
			return false;
		}

		//Retorna-se a instancia do objeto com todos os atributos que contém os dados do formulário da variável user
		return new User(
			user.name, 
			user.gender, 
			user.birth, 
			user.country, 
			user.email, 
			user.password, 
			user.photo, 
			user.admin
		);

	}

	//Este método tem função de "adicionar" uma linha na tabela de usuários, recebe como argumento os dados do usuário
	addLine(dataUser){

		let tr = document.createElement('tr');

		//Aqui faz o uso do dataset - serve para criar uma variável amais em memória e podendo ser acessado de outro lugar (updateCount)
		//Usa o JSON.stringify devido a suportar apenas texto
		tr.dataset.user = JSON.stringify(dataUser); 

		// innerHTML espera um comando html em String que precisa ser interpretado
		tr.innerHTML = `
		        <td>
		            <img src="${dataUser.photo}" alt="User Image" class="img-circle img-sm">
		        </td>
		        <td>${dataUser.name}</td>
		        <td>${dataUser.email}</td>
		        <td>${(dataUser.admin)?'Sim':'Não'}</td>
		        <td>${Utils.dateFormat(dataUser.register)}</td>
		        <td>
		            <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
		            <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
		        </td>
	    `;
	
		this.tableEl.appendChild(tr); //Aqui sempre será adicionado uma nova linha com o append, pois senão seria sempre subtituiria o cadastro atual à primeira linha

		this.updateCount();
	}

	//Este método contabiliza quantos elementos tem na linha 
	updateCount(){
		
		let numberUsers = 0;
		let numberAdmin = 0;

		[...this.tableEl.children].forEach(tr=>{

			numberUsers++;
			let user = JSON.parse(tr.dataset.user);//Transforma string em Objeto JS
			if(user._admin) numberAdmin++;//Se for admin soma ao numberAdmin

		});

		//Contabiliza a estatistica de qtd de usuarios na tela direto pelo HTML
		document.querySelector("#number-users").innerHTML = numberUsers;
		document.querySelector("#number-users-admin").innerHTML = numberAdmin;
	
	}



}