class CalcController{
	// convensão: _ simbolo para private
	constructor(){
		this._locale = 'pt-BR';
		this._displayCalcEl = document.querySelector("#display");
		this._dateEl = document.querySelector("#data");
		this._timeEl = document.querySelector("#hora");
		this._currentDate;
		this.initialize();
	}

	initialize(){
		
		this.setDisplayDateTime();

		setInterval(()=>{
			this.setDisplayDateTime();
		}, 1000);
		/*setTimeout(()=>{
			clearInterval(interval);
		},10000);*/
	}

	initButtonsEvents(){
		let buttons = document.querySelectorAll("#buttons > g, #parts > g");
	}
	setDisplayDateTime(){
		this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
			day:"2-digit",
			month: "long",
			year: "numeric"
		});
		this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
	}

	get displayTime(){
		return this._timeEl.innerHTML;
	}
	get displayDate(){
		return this._dateEl.innerHTML;
	}

	set displayTime(valor){
		return this._timeEl.innerHTML = valor;
	}
	set displayDate(valor){
		return this._dateEl.innerHTML = valor;
	}

	get displayCalc(){
		return this._displayCalcEl.innerHTML;
	}

	set displayCalc(valor){
		this._displayCalcEl.innerHTML = valor;
	}

	get currentDate(){
		return new Date();
	}

	set currentDate(valor){
		return this._currentDate = valor;
	}
}