const elasticSearch = require('elasticsearch');

const elasticsearch = new elasticsearch.Client({
	host: '127.0.0.1:9200',
	log: 'info'
});

const indexName = 'randomIndex';


/**
* Delete an existing index
*/

const deleteIndex = () => {
	return elasticClient.indices.delete({
		index: indexName;
	});
}

/**
* create the index
*/


const initIndex = () => {
	return elasticClient.indices.create({
		index: indexName;
	});
}

/**
* check if the index exists
*/
*
const indexExists = () => {
	return elasticClient.indices.exists({
		index: indexName;
	})
}

const initMapping = () => {  
    return elasticClient.indices.putMapping({
        index: indexName,
        type: "document",
        body: {
            properties: {
                title: { type: "string" },
                content: { type: "string" },
                suggest: {
                    type: "completion",
                    analyzer: "simple",
                    search_analyzer: "simple",
                    payloads: true
                }
            }
        }
    });
}

const addDocument = (document) => {  
    return elasticClient.index({
        index: indexName,
        type: "document",
        body: {
            title: document.title,
            content: document.content,
            suggest: {
                input: document.title.split(" "),
                output: document.title,
                payload: document.metadata || {}
            }
        }
    });
}

const getSuggestions = (input) => {  
    return elasticClient.suggest({
        index: indexName,
        type: "document",
        body: {
            docsuggest: {
                text: input,
                completion: {
                    field: "suggest",
                    fuzzy: true
                }
            }
        }
    })
}

module.exports = {
	deleteIndex: deleteIndex,
	initIndex: initIndex,
	indexExists: indexExists,
	initMapping: initMapping,
	addDocument: addDocument,
	getSuggestions: getSuggestions
}
