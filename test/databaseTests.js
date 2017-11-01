const { expect } = require('chai');
const dbHelpers = require('../db/dbHelpers');
const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('../db/knexfile');

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);


describe('Database', () => {
  describe('query recommendations from database', () => {
    it('should query user recommendation for user with user_id of 5', () => {
      return dbHelpers.getUserRecommendation(10)
        .then((recommendation) => {
          expect(recommendation).to.be.an('array');
          expect(recommendation[0]).to.be.an('object');
          expect(recommendation[0]).to.have.property('id');
          expect(recommendation[0]).to.have.property('user_id');
          expect(recommendation[0]).to.have.property('game_id');
          expect(recommendation[0]).to.have.property('title');
          expect(recommendation[0]).to.have.property('preference');
        });
    });
    it('should query the correct user recommendations', () => {
      return dbHelpers.getUserRecommendation(5)
        .then((recommendation) => {
          expect(recommendation[0]).to.deep.include({
            id: 5,
            user_id: 5,
            game_id: 4,
            title: 'PAYDAY 2',
            preference: 'ACTION',
          });
        });
    });
  });
});


