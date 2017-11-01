const routes = require('express').Router();
const db = require('../db/dbHelpers');

routes.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

routes.get('/api/v1/recommendations', (req, res) => {
  db.getAllRecommendations()
    .then(recommendations => res.json(recommendations));
});

routes.get('/api/v1/recommendations/user/:userId', (req, res) => {
  db.getUserRecommendation(req.params.userId)
    .then(recommendation => res.json(recommendation));
});

// routes.post('[something]', (req, res) => {
//   // TODO
// });

module.exports = routes;

