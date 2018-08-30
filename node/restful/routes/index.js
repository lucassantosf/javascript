module.exports = app=>{

	app.get('/',(req, res)=>{ //Criação do Servidor

		res.statusCode = 200; //Protocolo http que deu certo!
		res.setHeader('Content-Type','text/html');//Especifica o cabeçalho, qual é o header e o tipo de conteúdo
		res.end('<h1>Olá</h1>');

	});

};