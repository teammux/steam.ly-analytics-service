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

const indexName = 'recommendation';

/**
* Delete an existing index
*/

const deleteIndex = () => (
  elasticClient.indices.delete({
    index: indexName,
  })
);

/**
* create the index
*/

const initIndex = () => (
  elasticClient.indices.create({
    index: indexName,
  })
);

/**
* check if the index exists
*/

const indexExists = () => (
  elasticClient.indices.exists({
    index: indexName,
  })
);

const initMapping = () => (
  elasticClient.indices.putMapping({
    index: indexName,
    type: 'recommendation',
    body: {
      properties: {
        user_id: { type: 'integer' },
        game_id: { type: 'integer' },
        title: { type: 'string' },
        preference: { type: 'string' },
      },
    },
  })
);

module.exports.elasticClient = elasticClient;
module.exports.ping = ping;
module.exports.deleteIndex = deleteIndex;
module.exports.initIndex = initIndex;
module.exports.indexExists = indexExists;
module.exports.initMapping = initMapping;

