/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
    });
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
  };
  
