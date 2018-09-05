module.exports = (app)=>{

	app.get('/',(req, res)=>{

		res.statusCode = 200; 
		res.setHeader('Content-Type', 'text/html'); //Setando o cabeçalho da aplicação com html
		res.end('<h1>Olá</h1>');

	});

};