const Knex = require('knex');
const AWS = require('aws-sdk');
const { Model } = require('objection');

const knexConfig = require('../db/knexfile');

// initialize knex
const knex = Knex(knexConfig);
Model.knex(knex);

AWS.config.loadFromPath('./config.json');

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const params = {
 DelaySeconds: 10,
 MessageAttributes: {
  "Title": {
    DataType: "String",
    StringValue: "The Whistler"
   },
  "Author": {
    DataType: "String",
    StringValue: "John Grisham"
   },
  "WeeksOn": {
    DataType: "Number",
    StringValue: "6"
   }
 },
 MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
 QueueUrl: "https://sqs.us-west-2.amazonaws.com/504566468641/myqueue.fifo"
};

sqs.sendMessage(params, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});


