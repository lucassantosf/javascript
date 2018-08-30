let NeDB = require('nedb');
let db = new NeDB({
	filename:'users.db',
	autoload:true
});

module.exports = (app)=>{

	let route = app.route('/users');

	//Recuperar dados
	route.get((req, res)=>{

		db.find({}).sort({name:1}).exec((err, users)=>{
			if(err){
				app.utils.error.send(err, req, res);
			}else{
				res.statusCode = 200; //Protocolo http que deu certo!
				res.setHeader('Content-Type','application/json');//Especifica o cabeçalho, qual é o header e o tipo de conteúdo
				res.json({
					users
				});
			}
		});		

	});


	//Salvar dados
	route.post((req,res)=>{

		//validar dados
		if(!app.utils.validator.user(app, req, res)) return false;

		//Salvar dados

		db.insert(req.body,(err, user)=>{
			if(err){
				app.utils.error.send(err, req, res);
			}else{
				res.status(200).json(user);
			}
		});

	});

	//Editar um unico registro
	let routeId = app.route('/users/:id');
	routeId.get((req,res)=>{

		db.findOne({_id:req.params.id}).exec((err, user)=>{
			if(err){
				app.utils.error.send(err, req, res);
			}else{
				res.status(200).json(user);
			}
		});
	});

	//Editar dados
	routeId.put((req,res)=>{

		//Validar dados
		if(!app.utils.validator.user(app, req, res)) return false;

		db.update({_id:req.params.id}, req.body, err =>{
			if(err){
				app.utils.error.send(err, req, res);
			}else{
				res.status(200).json(Object.assign(req.params, req.body));
			}
		});
	});

	//Excluir dados
	routeId.delete((req, res)=>{
		db.remove({_id:req.params.id}, {}, err=>{
			if(err){
				app.utils.error.send(err, req, res);
			}else{
				res.status(200).json(req.params);
			}
		});
	});



}