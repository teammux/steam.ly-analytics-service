const routes = require('express').Router();
const db = require('../db/dbHelpers');

routes.get('/api/v1/recommendations', (req, res) => {
  db.getAllRecommendations()
    .then(recommendations => res.json(recommendations));
});

routes.get('/api/v1/recommendations/user/:userId', (req, res) => {
  db.getUserRecommendation(req.params.userId)
    .then(recommendation => res.json(recommendation));
});

module.exports = routes;

