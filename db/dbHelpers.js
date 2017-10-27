const models = require('./models');

const getUserRecommendation = userId => (
  models.Recommendations.query()
    .where('user_id', '=', userId)
);

const getAllRecommendations = () => (
  models.Recommendations.query()
);

module.exports.getUserRecommendation = getUserRecommendation;
module.exports.getAllRecommendations = getAllRecommendations;

