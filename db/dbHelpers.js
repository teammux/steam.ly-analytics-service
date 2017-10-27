const models = require('./models');

module.exports.getUserRecommendation = userId => (
  models.Recommendations.query()
    .where('user_id', '=', userId)
);

module.exports.getAllRecommendations = () => (
  models.Recommendations.query()
);
