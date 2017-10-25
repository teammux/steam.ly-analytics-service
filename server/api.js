const routes = require('express').Router();
const models = require('../db/models');

routes.get('/', (req, res) => {
  res.end('hello');
});

routes.get('/recommendations', (req, res) => {
	
  res.end('hello');
});

module.exports = routes;