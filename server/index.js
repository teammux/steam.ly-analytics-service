const express = require('express');
const app = express();
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const Knex = require('knex');
const knexConfig = require('../db/knexfile');
const Model = require('objection').Model;
const PORT = 3000;

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

app.get('/', (req, res) => {
	res.end('hello world');
})



app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

