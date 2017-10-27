const elasticsearch = require('elasticsearch');

const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
});

const ping = () => {
  elasticClient.ping({
    requestTimeout: 3000,
  }, (err) => {
    if (err) {
      console.log('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });
};

module.exports.elasticClient = elasticClient;
module.exports.ping = ping;

