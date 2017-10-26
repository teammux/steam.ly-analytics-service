module.exports.up = knex => (
  knex.schema
    .createTableIfNotExists('recommendations', (table) => {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('game_id');
      table.string('title');
      table.string('preference');
    })
    .createTableIfNotExists('recommendeduser', (table) => {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('game_id');
      table.date('date');
    })
);

module.exports.down = knex => (
  knex.schema
    .dropTableIfExists('recommendeduser')
    .dropTableIfExists('recommendations')
);

