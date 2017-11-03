const routes = require('express').Router();
const db = require('../db/dbHelpers');
const simulate = require('../db/dummydatascript/randomgame');

routes.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

routes.get('/api/v1/recommendations', (req, res) => {
  db.getAllRecommendations()
    .then(recommendations => res.json(recommendations));
});

routes.get('/api/v1/recommendations/user/:userId', (req, res) => {
  db.getUserRecommendation(req.params.userId)
    .then((recommendation) => {
      const randomGame = simulate.randomGame();
      const recs = {
        recommended: [
          recommendation[0],
        ],
        random: [
          {
            id: recommendation[0].id,
            user_id: recommendation[0].user_id,
            game_id: randomGame.game_id, // TODO: Integrate content-service API interface to get Random Game
            title: randomGame.title, // TODO: Integrate content-service API interface to get Random Game
          },
        ],
      };
      res.json(recs);
    });
});

module.exports = routes;
