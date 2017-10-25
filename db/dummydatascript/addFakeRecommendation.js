const models = require('../models');
const Knex = require('knex');
const knexConfig = require('../knexfile');
const Model = require('objection').Model;

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

const DEFAULT_TOTAL_USER_COUNT = 5750000;
const DEFAULT_USER_NUMBER_START = 750000;

const PREFERENCE_RATIO = {
  'NONE': 10,
  'FPS': 29,
  'ACTION': 36,
  'RPG': 25,
};

const TITLE_PREFIX = 'game_';

// use a quick-and-dirty weighted randomizer with expansion
// this is quick and okay so long as our totalWeights isn't astronomicz`ally large
const generateExpandedWeightTable = (weightKeys) => {
  let expandedWeightList = [];

  for (let key in weightKeys) {
    for (let i = 0; i < weightKeys[key]; i++) {
      expandedWeightList[expandedWeightList.length++] = key;
    }
  }

  return expandedWeightList;
};

const getRandomNumberInclusive = (begin = 0, end) => {
  return Math.floor(Math.random() * end) + begin;
};

const getRandomFieldValue = (weightTable) => {
  return weightTable[getRandomNumberInclusive(0, weightTable.length)];
};


const addRecommendationToDB = async () => {
	const PREFERENCE_RATIO_WEIGHT_TABLE = generateExpandedWeightTable(PREFERENCE_RATIO);

	for (let i = DEFAULT_USER_NUMBER_START; i < (DEFAULT_TOTAL_USER_COUNT + DEFAULT_USER_NUMBER_START); i++) {
		await models.Recommendations.query().insert({
			userId: i,
			gameId: i,
			title: TITLE_PREFIX + i,
			preference: getRandomFieldValue(PREFERENCE_RATIO_WEIGHT_TABLE)
    })
    .then(recommendation => console.log(recommendation))
    .catch(err => console.log(err));
	}
}

addRecommendationToDB()






