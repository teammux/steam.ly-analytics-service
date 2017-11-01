module.exports.up = knex => (
  knex.schema
    .createTableIfNotExists('recommendations', (table) => {
      table.increments('id').primary();
      table.integer('user_id');
      table.integer('game_id');
      table.string('title');
      table.string('preference');
    })
    .createTableIfNotExists('gamemetrics', (table) => {
      table.increments('id').primary();
      table.integer('game_id');
      table.integer('title');
      table.integer('average_user_rating');
      table.integer('total_clicks');
    })
);

module.exports.down = knex => (
  knex.schema
    .dropTableIfExists('gamemetrics')
    .dropTableIfExists('recommendations')
);

