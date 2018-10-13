window.addEventListener('focus', event =>{
	console.log("Focus");
});

document.addEventListener('click', event=>{
	console.log("CLique");
});

let agora = new Date();
console.log(agora.toLocaleDateString("pt-BR"));
console.log(agora.getDate());
console.log(agora.getFullYear());
console.log(agora.getMonth());

