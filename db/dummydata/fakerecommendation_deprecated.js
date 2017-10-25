const models = require('../models');
const createTables = require('../migrations/schema');

module.exports = (knex) => {
	return knex.schema.dropTableIfExists('recommendations')
	  .then(() => knex.schema.dropTableIfExists('recommendeduser'))
	  .then(() => createTables.up(knex))

    /* Populate database with dummy data */
	  .then(() => {
	  	models.Recommendations.query().insert({
	  		userId: 1,
	  		gameId: 1,
	  		title: "game_1",
	  		preference: "FPS"
	  	});
	 })
	  .then(() => {
	  	models.RecommendedUser.query().insert({
	  		user_id: 1,
	  		game_id: 1,
	  		date: "2017-10-24"
	  })
	  .catch(err => console.log(err));
  });
}