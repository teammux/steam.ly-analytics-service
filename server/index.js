const express = require('express');
const bodyParser = require('body-parser');
const Knex = require('knex');
const knexConfig = require('../db/knexfile');
const Model = require('objection').Model;

const PORT = process.env.DATABASE_URL || 3000;
const api = require('./api');

const app = express();

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', api);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

