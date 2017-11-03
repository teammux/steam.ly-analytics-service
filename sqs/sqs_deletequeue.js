const AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const params = {
  QueueUrl: 'https://sqs.us-west-2.amazonaws.com/504566468641/test.fifo',
};

sqs.deleteQueue(params, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data.QueueUrl);
  }
});
