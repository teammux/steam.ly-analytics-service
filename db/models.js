const Model = require('objection').Model;

module.exports.Recommendations = Model.extend({
  static get tableName() {
    return 'Recommendations';
  }
});

module.exports.Recommended_User_Game = Model.extend({
  static get tableName() {
    return 'Recommended_User_Game';
  }
});

