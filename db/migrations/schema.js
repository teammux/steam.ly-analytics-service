module.exports.up = function (knex) {
  return knex.schema
    .createTableIfNotExists('recommendations', function (table) {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('game_id');
      table.string('title');
      table.string('preference');
    })
    .createTableIfNotExists('recommendeduser', function (table) {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('game_id');
      table.date('date');
    })
};

module.exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('recommendeduser')
    .dropTableIfExists('recommendations');
};

