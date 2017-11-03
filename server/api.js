const routes = require('express').Router();
const db = require('../db/dbHelpers');
const AWS = require('aws-sdk');
const simulate = require('./helpers');

routes.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

routes.get('/api/v1/recommendations', (req, res) => {
  db.getAllRecommendations()
    .then(recommendations => res.json(recommendations));
});

routes.get('/api/v1/recommendations/user/:userId', (req, res) => {
  db.getUserRecommendation(req.params.userId)
    .then(recommendation => {
      let randomGame = simulate.randomGame()
      const recs = {
          recommended: [
            recommendation[0]
          ],
          random: [
            {
              id: recommendation[0].id,
              user_id: recommendation[0].user_id,
              game_id: randomGame.game_id,
              title: randomGame.title,
            }
          ]
        }
      res.json(recs)
    });
});

module.exports = routes;
