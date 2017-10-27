const { expect, assert } = require('chai');
const dbHelpers = require('../db/dbHelpers');
const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('../db/knexfile');

// const PORT = process.env.PORT || 3000;

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);


describe('Database', () => {

  describe('query one recommendation from database', () => {
    it('should query user recommendation', () => {
      return dbHelpers.getUserRecommendation(1)
        .then((recommendation) => {
          expect(recommendation).to.be.an('array');
          expect(recommendation[0]).to.property('id');
          expect(recommendation[0]).to.property('user_id');
          expect(recommendation[0]).to.property('game_id');
          expect(recommendation[0]).to.property('title');
          expect(recommendation[0]).to.property('preference');
        });
    });
  });
});

