const AWS = require('aws-sdk');
const Knex = require('knex');
const knexConfig = require('../db/knexfile');
const { Model } = require('objection');
const dbHelpers = require('../db/dbHelpers');

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

AWS.config.loadFromPath('./config.json');

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

dbHelpers.getUserRecommendation(5)
  .then(response => {
    console.log(response[0])
    const params = {};
})

