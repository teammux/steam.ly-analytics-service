const routes = require('express').Router();
const db = require('../db/dbHelpers');
const simulate = require('../db/dummydatascript/randomgame');

routes.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

routes.get('/api/v1/recommendations', (req, res) => {
  db.getAllRecommendations()
    .then(recommendations => res.json(recommendations))
    .catch(err => console.log(err));
});

routes.get('/api/v1/recommendations/user/:userId', (req, res) => {
  db.getUserRecommendation(req.params.userId)
    .then((recommendation) => {
      const randomGame = simulate.randomGame();
      const recs = {
        recommended: [recommendation],
        random: [
          {
            id: recommendation.id,
            user_id: recommendation.user_id,
            game_id: randomGame.game_id, // TODO: Integrate content-service API interface to get Random Game
            title: randomGame.title, // TODO: Integrate content-service API interface to get Random Game
          },
        ],
      };
      res.json(recs);
    })
    .catch(err => console.log(err));
});

routes.post('/api/v1/recommendations/user', (req, res) => {
  const user = req.body;
  db.getUpdatedUserRecommendation(user.id, user.preference)
    .then((recommendation) => {
      const randomGame = simulate.randomGame();
      const recs = {
        recommended: [recommendation],
        random: [
          {
            id: recommendation.id,
            user_id: recommendation.user_id,
            game_id: randomGame.game_id,
            title: randomGame.title,
          },
        ],
      };
      res.json(recs);
    })
    .catch(err => console.log(err));
});

module.exports = routes;
