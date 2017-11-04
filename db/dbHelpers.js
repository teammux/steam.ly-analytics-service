const models = require('./models');
const Knex = require('knex');
const knexConfig = require('./knexfile');
const { Model } = require('objection');

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

const getUserRecommendation = userId => (
  models.Recommendations.query()
    .where('user_id', '=', userId)
    .first()
);

const getAllRecommendations = () => (
  models.Recommendations.query()
);

const getUpdatedUserRecommendation = (userId, field) => {
  return models.Recommendations.query()
    .patch({ preference: field })
    .where('id', userId)
    .first()
    .returning('*');
};

module.exports.getUserRecommendation = getUserRecommendation;
module.exports.getAllRecommendations = getAllRecommendations;
module.exports.getUpdatedUserRecommendation = getUpdatedUserRecommendation;
