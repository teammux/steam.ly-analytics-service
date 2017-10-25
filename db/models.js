const Model = require('objection').Model;

module.exports.Recommendations = Model.extend({
  static get tableName() {
    return 'recommendation';
  }
});

module.exports.Recommended_User_Game = Model.extend({
  static get tableName() {
    return 'recommendeduser';
  }
});

