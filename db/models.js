const { Model } = require('objection');

class Recommendations extends Model {
  static get tableName() {
    return 'recommendations';
  }
}

class Gamemetrics extends Model {
  static get tableName() {
    return 'gamemetrics';
  }
}


module.exports.Recommendations = Recommendations;
module.exports.Gamemetrics = Gamemetrics;

