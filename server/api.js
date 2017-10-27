const routes = require('express').Router();
const db = require('../db/dbHelpers');
const { elasticClient } = require('./elasticsearch');


routes.get('/api/v1/recommendations', (req, res) => {
  db.getAllRecommendations()
    .then(recommendations => res.json(recommendations));

  // res.end();
});

routes.get('/api/v1/recommendations/user/:userId', (req, res) => {
  db.getUserRecommendation(req.params.userId)
    .then((recommendation) => {
      elasticClient.create({
        index: 'recommendations',
        type: 'recs',
        id: recommendation[0].id,
        body: {
          user_id: recommendation[0].user_id,
          game_id: recommendation[0].game_id,
          title: recommendation[0].title,
          preference: recommendation[0].preference,
        },
      });
    });

  res.end();
});

module.exports = routes;

