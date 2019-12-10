// a migration describes the changes to apply to the database

// the up function describes what will be done. When we run a migration, the up function executes
exports.up = function(knex) {
  // ALWAYS RETURN THE CALL TO KNEX.SCHEMA
  return knex.schema.createTable("veggies", tbl => {
    //primary key, called 'id', an integer, autoincrements
    tbl.increments();

    // unique is a constraint (rules we define to protect against invalid data)
    tbl
      .string("name", 255)
      .notNullable()
      .unique()
      .index(); // makes searching for vegetables using this column faster

    tbl.boolean("like_it").defaultTo(0); // 1 = true, 0 = false. can also use true/false
  });
};

// the down function describes how to revert the changes (like undo for the schema). When we undo a migration, the down function executes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("veggies");
};
