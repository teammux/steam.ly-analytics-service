const Model = require('objection').Model;

class Recommendations extends Model {
  static get tableName() {
    return 'recommendations';
  }
}

class RecommendedUser extends Model {
  static get tableName() {
    return 'recommendeduser';
  }
}


module.exports.Recommendations = Recommendations;
module.exports.RecommendedUser = RecommendedUser;
