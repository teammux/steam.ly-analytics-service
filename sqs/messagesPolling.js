const Consumer = require('sqs-consumer');
const AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

const RECOMMENDATION_URL = 'https://sqs.us-west-2.amazonaws.com/504566468641/recommendations';

const app = Consumer.create({
  queueUrl: RECOMMENDATION_URL,
  handleMessage: (message, done) => {
    console.log(message.Body);
    done();
  },
  sqs: new AWS.SQS(),
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();

