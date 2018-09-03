let NeDB = require('nedb');
let db = new NeDB({
	filename: 'users.db',//comando para criar o arquivo
	autoload:true//Sempre perguntar se existe o arquivo, se existir sempre carrega-lo 
});


module.exports = (app)=>{
	
	let route = app.route('/users');

	route.get((req, res)=>{

		db.find({}).sort({name:1}).exec((err, users)=>{

			if(err){
				app.utils.error.send(err, req, res);
			}else{

				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');//Indicando o retorno de arquivos json
				res.json({
					users
				});		

			}

		})

	});

	route.post((req,res)=>{

		//validaçoes de dados
		if(!app.utils.validator.user(app, req, res)) return false;

		//Comando para inserir dados
		db.insert(req.body, (err, user)=>{
			if(err){//Caso ocorrer algum erro ao salvar
				app.utils.error.send(err, req, res);
			}else{
				res.status(200).json(user);
			}

		});

	});

	//Para consultar apenas um ID
	let routeId = app.route('/users/:id');

	routeId.get((req, res)=>{

		db.findOne({_id:req.params.id}).exec((err, user)=>{
			if(err){//Caso ocorrer algum erro ao salvar
				app.utils.error.send(err, req, res);
			}else{
				res.status(200).json(user);
			}
		});

	});

	//Para editar dados
	routeId.put((req, res)=>{

		//validaçoes de dados
		if(!app.utils.validator.user(app, req, res)) return false;

		db.update({_id:req.params.id}, req.body, err=>{ //os dados passados para edição, estão contidos em req.body
			if(err){//Caso ocorrer algum erro ao salvar
				app.utils.error.send(err, req, res);
			}else{
				res.status(200).json(Object.assign(req.params, req.body));
			}
		});

	});

	//Para excluir dados
	routeId.delete((req, res)=>{

		db.remove({_id:req.params.id}, {}, err=>{ //os dados passados para edição, estão contidos em req.body
			if(err){//Caso ocorrer algum erro ao salvar
				app.utils.error.send(err, req, res);
			}else{
				res.status(200).json(req.params);
			}
		});

	});

};