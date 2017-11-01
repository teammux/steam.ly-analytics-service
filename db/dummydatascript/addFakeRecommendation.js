/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
// allowing 'no-underscore-dangle' for using '_id' as the indexing field

const models = require('../models');
const Knex = require('knex');
const knexConfig = require('../knexfile');
const { Model } = require('objection');
const { elasticClient } = require('../../server/elasticsearch');

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

const DEFAULT_TOTAL_USER_COUNT = 1000000;
const DEFAULT_USER_NUMBER_START = 1;

const RECOMMENDATION_RATIO = {
  NONE: 10,
  FPS: 50,
  ACTION: 30,
  RPG: 20,
};

const RANDOM_GAME = [
  "PLAYERUNKNOWN'S BATTLEGROUNDS",
  'Dota 2',
  'Counter-Strike: Global Offensive',
  'Warframe',
  'PAYDAY 2',
  'Team Fortress 2',
  'H1Z1',
  'Grand Theft Auto V',
  'ARK: Survival Evolved',
  "Tom Clancy's Rainbow Six Siege",
];

// use a quick-and-dirty weighted randomizer with expansion
// this is quick and okay so long as our totalWeights isn't astronomicz`ally large
const generateExpandedWeightTable = (weightKeys) => {
  const expandedWeightList = [];

  const keys = Object.keys(weightKeys);
  for (let k = 0; k < keys.length; k += 1) {
    for (let i = 0; i < weightKeys[keys[k]]; i += 1) {
      expandedWeightList[expandedWeightList.length] = keys[k];
    }
  }

  return expandedWeightList;
};

const getRandomNumberInclusive = (begin = 0, end) => (
  Math.floor(Math.random() * end) + begin
);

const getRandomFieldValue = weightTable => (
  weightTable[getRandomNumberInclusive(0, weightTable.length)]
);

const addRecommendationToDB = async () => {
  const RECOMMENDATION_RATIO_WEIGHT_TABLE = generateExpandedWeightTable(RECOMMENDATION_RATIO);

  for (let i = DEFAULT_USER_NUMBER_START; i < (DEFAULT_TOTAL_USER_COUNT + DEFAULT_USER_NUMBER_START); i += 1) {
    const randomNumber = getRandomNumberInclusive(0, RANDOM_GAME.length);
    await models.Recommendations.query().insert({
      user_id: i,
      game_id: randomNumber,
      title: RANDOM_GAME[randomNumber],
      preference: getRandomFieldValue(RECOMMENDATION_RATIO_WEIGHT_TABLE),
    })
      .then((recommendation) => {
        elasticClient.create({
          index: 'recommendations',
          type: 'recs',
          id: i,
          body: {
            user_id: recommendation.user_id,
            game_id: recommendation.game_id,
            title: recommendation.title,
            preference: recommendation.preference,
          },
        });
      })
      .catch(err => console.log(err));
  }
};

addRecommendationToDB();

