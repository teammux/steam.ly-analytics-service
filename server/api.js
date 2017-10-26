const routes = require('express').Router();
const models = require('../db/models');
const ELASTICSEARCH = require('./elasticsearch');

routes.get('/', (req, res) => {
  res.end('hello');
});

routes.get('/api/v1/recommendations', (req, res) => {
  res.end('hello');
});

routes.get('/elastic/ping', (req, res) => {
  ELASTICSEARCH.ping(req, res);
});




module.exports = routes;