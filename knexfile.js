/* 
This file contains instructions knex needs to connect to the database

Each key on the exported object has the configuration for a database environment (dev, production, testing, etc)
*/

module.exports = {
  // teaches knex to connect to the development database
  development: {
    client: "sqlite3", // the DB driver
    useNulllAsDefault: true, // only needed when using SQLite3
    connection: {
      filename: "./data/produce.db3" // where is the database file?
    },
    migrations: {
      directory: "./data/migrations" // will be created automatically
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  // how to connect to the staging (testing) environment
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
