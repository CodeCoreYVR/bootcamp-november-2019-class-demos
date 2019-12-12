// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      // username: "your postgres username",
      // password: "your postgres password",
      database: "express-rest"
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};
