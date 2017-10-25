const routes = require('express').Router();
const models = require('../db/models')
const createTables = require('../db/migrations/schema');

routes.get('/', (req, res) => {
	res.end('hello')
})

routes.get('/recommendations', (req, res) => {
	// console.log(createTables.up());
	res.end('hello')
})

module.exports = routes;