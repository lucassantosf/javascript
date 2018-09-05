const express = require('express');
const consign = require('consign');
const bodyParse = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

//Implementando que esta sera convertido todos os dados para JSON recebidos via POST
app.use(bodyParse.urlencoded({extended: false, limit:'50mb'})); 
app.use(bodyParse.json({ limit:'50mb'}));
app.use(expressValidator());
//----------------------------

consign().include('routes').include('utils').into(app); //Estou dizendo para o consig incluir as rotas de 'routes' para a variável app

app.listen(4000, '127.0.0.1', ()=>{

	console.log("Servidor Rodando!");

});