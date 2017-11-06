const Knex = require('knex');
const AWS = require('aws-sdk');
const { Model } = require('objection');

const knexConfig = require('../db/knexfile');
const db = require('../db/dbHelpers');
const simulate = require('../db/dummydatascript/randomgame');

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

AWS.config.loadFromPath('./config.json');

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const RECOMMENDATION_URL = 'https://sqs.us-west-2.amazonaws.com/504566468641/recommendations';

const sendRecommendation = (userId) => {
  db.getUserRecommendation(userId)
    .then((recommendation) => {
      const randomGame = simulate.randomGame();
      const recs = {
        recommended: [
          recommendation,
        ],
        random: [
          {
            id: recommendation.id,
            user_id: recommendation.user_id,
            game_id: randomGame.game_id, // TODO: Integrate content-service API interface to get Random Game
            title: randomGame.title, // TODO: Integrate content-service API interface to get Random Game
          },
        ],
      };
      return recs;
    })
    .then((recs) => {
      const params = {
        MessageBody: JSON.stringify(recs),
        QueueUrl: RECOMMENDATION_URL,
      };
      sqs.sendMessage(params, (err, data) => {
        if (err) {
          console.log('Error', err);
        } else {
          console.log('Success', data.MessageId);
        }
      });
    });
};

module.exports.sendRecommendation = sendRecommendation;

const getRandomNumberInclusive = (begin = 0, end) => (
  Math.floor(Math.random() * end) + begin
);

setInterval(() => {
  sendRecommendation(getRandomNumberInclusive(0, 1000000));
}, 100);
