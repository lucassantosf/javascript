var express = require('express');
var router = express.Router();
var conn = require('./../inc/db');
var menus = require('./../inc/menus');
var reservations = require('./../inc/reservations');

/* GET home page. */
router.get('/', function(req, res, next) {

	menus.getMenus().then(results=>{
		res.render('index', {  
	  		title: 'Restaurante Saboroso',
	  		menus: results,
	  		isHome: true
  		}); 
	}); 
});

router.get('/contacts', function(req, res, next){
	res.render('contacts',{
		title: 'Restaurante Saboroso',
		background : 'images/img_bg_3.jpg',
		h1: 'Diga um olá para nós!'
	});
});

router.get('/menus', function(req, res, next){
	menus.getMenus().then(results =>{
			res.render('menus',{
			title: 'Restaurante Saboroso',		
			background : 'images/img_bg_1.jpg',
			h1: 'Veja nossos menus!',
			menus: results
		});
	})
	
});

router.get('/reservations', function(req, res, next){
	
	reservations.render(req,res); 
});

router.post('/reservations', function(req, res, next){
	if(!req.body.name){
		reservations.render(req,res, 'Digite o nome');  
	}else if(!req.body.email){
		reservations.render(req,res, 'Digite o email'); 
	}else if(!req.body.people){
		reservations.render(req,res, 'Digite o people');  
	}else if(!req.body.name){ 
		reservations.render(req,res, 'Digite o people'); 
	}else if(!req.body.date){ 
		reservations.render(req,res, 'Digite o date');   
	}else if(!req.body.time){ 
		reservations.render(req,res, 'Digite o time');   
	}else{
		reservations.save(req.body).then(results=>{
			req.body = {};
			reservations.render(req,res,null,'Reserva realizada com sucesso');    
		}).catch(err=>{
			reservations.render(req,res, err.message);    
		});
	}
});

router.get('/services', function(req, res, next){
	res.render('services',{
		title: 'Restaurante Saboroso',
		background : 'images/img_bg_1.jpg',
		h1: 'É um prazer poder servir!'
	});
});

module.exports = router;
