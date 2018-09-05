class Utils{
	
	//Este método é estático e apenas formata a data recebida
	static dateFormat(date){
		return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
	}

}