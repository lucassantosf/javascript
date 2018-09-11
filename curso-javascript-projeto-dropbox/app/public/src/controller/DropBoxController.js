class DropBoxController{
	//Método construtor
	constructor(){

		this.btnSendFileEl = document.querySelector('#btn-send-file');
		this.inputFilesEl = document.querySelector('#files');
		this.snackModalEl = document.querySelector('#react-snackbar-root');
		this.progressBarEl = this.snackModalEl.querySelector('.mc-progress-bar-fg');
		this.nameFileEl = this.snackModalEl.querySelector('.filename');
		this.timeleftlEl = this.snackModalEl.querySelector('.timeleft');
		
		this.initEvents();
	}
	
	//Iniciar os eventos para todos elementos da tela
	initEvents(){

		this.btnSendFileEl.addEventListener('click', event=>{

			this.inputFilesEl.click();

		});

		this.inputFilesEl.addEventListener('change', event=>{

			this.uploadTask(event.target.files);

			this.modalShow();

			this.inputFilesEl.value = '';
			
		});
	}

	//Método para controlar se será exibido a barra de progresso
	modalShow(show = true){

		this.snackModalEl.style.display = (show) ? 'block' : 'none'; 

	}

	uploadTask(files){

		let promises = [];

		[...files].forEach(file=>{

			promises.push(new Promise((resolve, reject)=>{

				let ajax = new XMLHttpRequest();

				ajax.open('POST','/upload');

				ajax.onload = event =>{

					this.modalShow(false);

					try{
						resolve(JSON.parse(ajax.responseText));
					}catch(e){
						reject(e);
					}
				};

				ajax.onerror = event=>{

					this.modalShow(false);
					reject(event);

				};

				//Responsável pela barra de progresso ao fazer upload de arquivos
				ajax.upload.onprogress = event=>{

					this.uploadProgress(event, file);
					
				}

				let formData = new FormData();

				formData.append('input-file',file);

				this.startUploadTime = Date.now(); //serve para calcular tempo estimado para a barra de progresso

				ajax.send(formData);

			}));

		});

		return Promise.all(promises);
	
	}

	//Método para a barra de progresso
	uploadProgress(event, file){

		let timespent = Date.now() - this.startUploadTime;// Calcular o tempo de inicio antes do upload até exibir o progresso

		let loaded = event.loaded;
		let total = event.total;
		let porcent = parseInt((loaded/total) * 100);
		let timeleft = ((100 - porcent) * timespent) / porcent;

		this.progressBarEl.style.width = `${porcent}%`;

		this.nameFileEl.innerHTML = file.name;
		this.timeleftlEl.innerHTML = this.formatTimeToHuman(timeleft);

	}

	//Método para formatar o tempo de prograsso
	formatTimeToHuman(duration){

		let seconds = parseInt((duration/1000) % 60 );
		let minutes = parseInt(duration /(1000 * 60 ) % 60);
		let hours = parseInt(duration /(1000 * 60 * 60) % 24);

		if(hours > 0){

			return `${hours} hrs, ${minutes} min e ${seconds} s`;
		}
		if(minutes > 0){

			return `${minutes} min e ${seconds} s`;

		}
		if(seconds > 0){

			return `${seconds} s`;

		}
		return '';
	}	

}