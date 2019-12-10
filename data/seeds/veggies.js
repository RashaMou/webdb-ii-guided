exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("veggies")
    .truncate() //empties the table and resets the primary key (id). We use this if keeping the keys in sync is important. Otherwise use del()
    .then(function() {
      // Inserts seed entries
      return knex("veggies").insert([
        { name: "broccoli", like_it: 1 },
        { name: "sprouts", like_it: 0 },
        { name: "cabbage", like_it: 0 }
      ]);
    });
};
