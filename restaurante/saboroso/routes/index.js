var express = require('express');
var router = express.Router();
var conn = require('./../inc/db');
var menus = require('./../inc/menus');

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
	res.render('reservations',{
		title: 'Restaurante Saboroso',
		background : 'images/img_bg_2.jpg',
		h1: 'Reserve sua Mesa!'
	});
});

router.get('/services', function(req, res, next){
	res.render('services',{
		title: 'Restaurante Saboroso',
		background : 'images/img_bg_1.jpg',
		h1: 'É um prazer poder servir!'
	});
});

module.exports = router;
