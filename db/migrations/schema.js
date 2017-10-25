module.exports.up = function (knex) {
  return knex.schema
    .createTableIfNotExists('recommendations', function (table) {
      table.increments('id').primary();
      table.integer('userId');
      table.integer('gameId');
      table.string('title');
      table.string('preference');
    })
    .createTableIfNotExists('recommendeduser', function (table) {
      table.increments('id').primary();
      table.integer('userId');
      table.integer('gameId');
      table.date('date');
    })
};

module.exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recommendeduser')
    .dropTableIfExists('recommendations');
};

