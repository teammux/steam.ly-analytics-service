const AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

const params = {
  QueueName: 'recommendations',
  Attributes: {
    'DelaySeconds': '60',
    'MessageRetentionPeriod': '86400',
  },
};

sqs.createQueue(params, (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Success', data.QueueUrl);
  }
});
