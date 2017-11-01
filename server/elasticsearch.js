const elasticsearch = require('elasticsearch');

const HOST = process.env.ELASTIC_SEARCH_HOST || 'localhost';
const PORT = process.env.ELASTIC_SEARCH_PORT || 9200;

const elasticClient = new elasticsearch.Client({
  host: `${HOST}:${PORT}`,
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

