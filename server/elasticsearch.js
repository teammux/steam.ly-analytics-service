const elasticsearch = require('elasticsearch');

const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
});

const ping = (req, res) => {
  elasticClient.ping({
    requestTimeout: 30000,
  }, (err) => {
    if (err) {
      res.status(500);
      return res.json({
        status: false, msg: 'Elasticsearch cluster is down!',
      });
    }
    res.status(500);
    return res.json({
      status: true, msg: 'Success! Elasticsearch cluster is up!',
    });
  });
};

module.exports.ping = ping;
