var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

// Creates a JSON client
var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	client.get('/users', function(err, request, response, obj) {
		assert.ifError(err);
		res.json(obj);
	});

});

/* GET one user */
router.get('/:id', function(req, res, next) {
	
	client.get(`/users/${req.params.id}`, function(err, request, response, obj) {
		assert.ifError(err);
		res.json(obj);
	});

});

/* Put to update one user */
router.put('/:id', function(req, res, next) {
	
	client.put(`/users/${req.params.id}`, req.body, function(err, request, response, obj) {
		assert.ifError(err);
		res.json(obj);
	});

});

/* Delete one user */
router.delete('/:id', function(req, res, next) {
	
	client.del(`/users/${req.params.id}`, function(err, request, response, obj) {
		assert.ifError(err);
		res.json(obj);
	});

});

/* Post a new user */
router.post('/', function(req, res, next) {
	
	client.post(`/users`, req.body, function(err, request, response, obj) {
		assert.ifError(err);
		res.json(obj);
	});

});

module.exports = router;
