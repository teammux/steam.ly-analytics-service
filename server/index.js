const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Knex = require('knex');
const knexConfig = require('../db/knexfile');
const Model = require('objection').Model;
const api = require('./api');
const PORT = process.env.DATABASE_URL || 3000;

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', api);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

